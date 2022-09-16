describe("App.js", () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  });
  it("navigates to the metrics page", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("#overview-page")

    const currentUrl = () => {
      return window.location.href;
    }

    //This test initial redirect
    let data = await page.evaluate(currentUrl);
    expect(data).toBe("http://localhost:3000/admin")

    //Test navigations
    const pageFrame = page.mainFrame();
    const nav = await pageFrame.$$('nav a');
    await nav[1].click();
    await page.waitForSelector("#metrics-page");
    let text = await page.$eval("#metrics-page", (e) => e.textContent);
    expect(text).toContain("Test");

    await nav[2].click();
    await page.waitForSelector("#projects-page");
    text = await page.$eval("#projects-page", (e) => e.textContent);
    expect(text).toContain("Test");

    await nav[3].click();
    await page.waitForSelector("#alerts-page");
    text = await page.$eval("#alerts-page", (e) => e.textContent);
    expect(text).toContain("Test");
  });

  it("test graph type change", async () => {
    await page.goto("http://localhost:3000/admin");
    await page.waitForSelector("#overview-page")
    await page.waitForSelector("#select-line-graph")
    let barGraphTypeButton = await page.$('#select-bar-graph');
    const linetext = await page.$eval("#select-line-graph", (e) => e.getAttribute('aria-label'));
    let bartext = await page.$eval("#select-bar-graph", (e) => e.getAttribute('aria-label'));
    expect(linetext).toEqual("selected");
    expect(bartext).toEqual("");

    let bargraphEl = await page.$eval("#bar-graph", (e) => e.className);
    expect(bargraphEl).toContain("hidden")

    if (barGraphTypeButton !== null) {
      await barGraphTypeButton.click();
    }

    bartext = await page.$eval("#select-bar-graph", (e) => e.getAttribute('aria-label'));
    expect(bartext).toEqual("selected");

    bargraphEl = await page.$eval("#select-bar-graph", (e) => e.className);
    expect(bargraphEl).not.toContain("hidden")
  });
});
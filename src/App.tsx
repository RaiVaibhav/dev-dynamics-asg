import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import NavLayout from "./components/NavLayout";
import QueryWrapper from "./components/QueryWrapper";
import OverviewPage from "./pages/overviewPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 0,
      suspense: true
    }
  }
});

export default function App() {
  return (
    <QueryWrapper>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<NavLayout />}>
              <Route path="admin" element={<OverviewPage />}>
              </Route>
              <Route path="metrics" element={<div>Test</div>}>
              </Route>
              <Route path="projects" element={<div>Test</div>}>
              </Route>
              <Route path="alerts" element={<div>Test</div>}>
              </Route>
            </Route>
            <Route
              path="*"
              element={<Navigate to="/admin" replace />}
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </QueryWrapper>
  );
}

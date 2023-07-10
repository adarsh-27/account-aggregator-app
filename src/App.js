import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashBoardPage from './pages/DashBoardPage';
import RootPage from './pages/RootPage';
import BanksPage from './pages/BanksPage';
import BankAccountPage from './pages/BankAccountPage';
import FixedDepositPage from './pages/FixedDepositPage';
import PPFAccountPage from './pages/PPFAccountPage';
import TaxesPaidPage from './pages/TaxesPaidPage';
import UploadStatementsPage from './pages/UploadStatementsPage';
import InvestmenstRootPage from './pages/InvestmenstRootPage';
import RecurringDepositePage from './pages/RecurringDepositePage'
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
const router = createBrowserRouter([
  {
    path: "/", element: <RootPage />, children: [
      {
        index: true, element: <DashBoardPage />
      },
      {
        path: "dashboard", element: <DashBoardPage />
      },
      {
        path: 'banks', element: <BanksPage />
      },
      {
        path: 'bank-account', element: <BankAccountPage />
      },
      {
        path: 'investments', element: <InvestmenstRootPage />, children: [
          {
            path: 'fixed-deposits', element: <FixedDepositPage />
          },
          {
            path: 'recurring-deposits', element: <RecurringDepositePage />
          }
        ]
      },
      {
        path: 'PPF-account', element: <PPFAccountPage />
      },
      {
        path: 'taxes-paid', element: <TaxesPaidPage />
      },
      {
        path: 'upload-statements', element: <UploadStatementsPage />
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;

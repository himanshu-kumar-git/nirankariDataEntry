/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/Login";
import Home from "./Pages/Home";
import StickyNavbar from "./Components/layout/StickyNavbar";
import DetailForm from "./Pages/DetailForm";

import { UserDashboard } from "./Pages/UserDesh";
import Footer from "./Components/layout/Footer";
import { WeeklyDetail } from "./Pages/WeeklyDetail";
import RegisterPage from "./AdminPannel/componentAdmin/Register";
import { useFirebase } from "./Context/Firebase";
import { Navigate } from "react-router-dom";
import { UserList } from "./AdminPannel/componentAdmin/UsersList";
import { MonthlyTable } from "./AdminPannel/componentAdmin/MonthlyTable/MonthlyTable";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyNavbar className="fixed top-0 inset-x-0 z-50" />
      <div className="flex-1">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/signup"
            element={
              <ProtectedRoutesForAdmin>
                <RegisterPage />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/monthlyEntry" element={<DetailForm />} />

          <Route path="/userDashBoard" element={<UserDashboard />} />
          <Route path="/weeklyentry" element={<WeeklyDetail />} />

          <Route
            path="/userList"
            element={
              <ProtectedRoutesForAdmin>
                <UserList />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route
            path="/monthlyrecord"
            element={
              <ProtectedRoutesForAdmin>
                <MonthlyTable />
              </ProtectedRoutesForAdmin>
            }
          />
        </Routes>
      </div>
      <Footer className="fixed bottom-0 inset-x-0" />
    </div>
  );
};

export default App;

export const ProtectedRoutesForAdmin = ({ children }) => {
  const firebase = useFirebase();
  if (firebase.user !== null) {
    const admin = firebase.user.email;
    if (admin === import.meta.env.VITE_ADMIN_EMAIL) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

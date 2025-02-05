import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
// import Notification from "./layout/Notification";
import HomeScreen from "./components/HomeScreen";
import MarkSheet from "./components/MarkSheet";
import LoginPage from "./components/LoginPage";
import AdmissionPage from "./components/AdmissionPage";
import ExamForm from "./components/ExamForm";
import AdmissionForm from "./components/AdmissionForm";
import OldAdmission from "./components/OldAdmission";
import SecondAdmission from "./components/SecondAdmission";
import AdminLogin from "./Admin Dashboard/AdminLogin";
import AdminPanel from "./Admin Dashboard/AdminPanel";
import DashBoard from "./Admin Dashboard/AdminDashBoard";
import StudentsData from "./Admin Dashboard/StudentsData";
import NavbarTop from "./layout/NavbarTop";
import Footer2 from "./layout/Footer2";
import Faculty from "./Admin Dashboard/Faculty";
import AdminDashBoard from "./Admin Dashboard/AdminDashBoard";
import TeacherDashboard from "./Teacher Dashboard/TeacherDashboard";
import StudentDashboard from "./Admin Dashboard/StudentDashboard";
import ParentDashboard from "./Admin Dashboard/ParentDashboard";
import MainNavBar from "./components/MainNavBar";
import AdmissionProcess from "./layout/AdmissionProcess";
import FeeStructure from "./layout/FeeStructure";
import Undergraduate from "./layout/Undergraduate";
import ExaminationSchedules from "./layout/ExaminationSchedules";
import ExaminationResults from "./layout/ExaminationResults";
import ExaminationNews from "./layout/ExaminationNews";
import SignupPage from "./components/SignupPage";
import UserTypePage from "./components/UserTypePage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import LoaderForReset from "./components/LoaderForReset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExistingStudentsForm from "./components/ExistingStudentsForm";
import ExistingPassTable from "./components/ExistingPassTable";
import Breadcrumb from "./layout/Breadcrump";
import AboutUsPage from "./layout/AboutUsPage";
import OurLegacy from "./layout/OurLegacy";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Router>
      <ToastContainer />

      <ConditionalNavbarAndNotification />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/marksheet" element={<MarkSheet />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/admission-page" element={<AdmissionPage />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
          <Route path="/exam-form" element={<ExamForm />} />
          <Route path="/old-admission" element={<OldAdmission />} />
          <Route path="/second-admission" element={<SecondAdmission />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/footer" element={<Footer2 />} />
          <Route path="/admission-process" element={<AdmissionProcess />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/undergraduate" element={<Undergraduate />} />
          <Route
            path="/examination-schedules"
            element={<ExaminationSchedules />}
          />
          <Route path="/examination-result" element={<ExaminationResults />} />
          <Route path="/examination-news" element={<ExaminationNews />} />
          <Route path="/signup-page" element={<SignupPage />} />
          <Route path="/user-type" element={<UserTypePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
          <Route path="/loader" element={<LoaderForReset />} />
          <Route path="/existing-students" element={<ExistingStudentsForm />} />
          <Route path="/existing-students" element={<ExistingPassTable />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-legacy" element={<OurLegacy />} />
        </Route>
        {/* <Route path="/existing-signup" element={<ExistingSignup />} /> */}
        {/* <Route path="/existing-login" element={<ExistingLogin />} /> */}

        {/* Admin Panel Routes (Nested) */}
        <Route path="/admin-panel" element={<AdminPanel />}>
          <Route path="admin-dashboard" element={<AdminDashBoard />} />
          <Route path="students-data" element={<StudentsData />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="teacher" element={<TeacherDashboard />} />
          <Route path="student" element={<StudentDashboard />} />
          <Route path="parent" element={<ParentDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

const ConditionalNavbarAndNotification = () => {
  const location = useLocation();

  // Define routes where Navbar and Notification should appear
  const routesWithNavbarAndNotification = [
    "/",
    "/marksheet",
    "/admission-page",
    "/exam-form",
    "/admission-form",
    "/login-page",
    "/old-admission",
    "/second-admission",
    "/admission-process",
    "/fee-structure",
    "/undergraduate",
    "/examination-schedules",
    "/examination-result",
    "/examination-news",
    // "/signup-page",
    "/user-type",
    "/existing-signup",
    "/about-us",
    "/our-legacy",
    "/existing-students",
    // "/homescreen"
  ];

  return routesWithNavbarAndNotification.includes(location.pathname) ? (
    <div className="fixed top-0 w-full z-50"></div>
  ) : null;
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import AddRoomPage from "./components/admin/AddRoomPage";
import AdminPage from "./components/admin/AdminPage";
import EditBookingPage from "./components/admin/EditBookingPage";
import ManageBookingsPage from "./components/admin/ManageBookingsPage";
import LoginPage from "./components/auth/LoginPage";
import RegistrationPage from "./components/auth/RegistrationPage";
import AllRoomsPage from "./components/bookingRooms/AllRoomsPage";
import FindBookingPage from "./components/bookingRooms/FindBookingPage";
import RoomDetailsBookingPage from "./components/bookingRooms/RoomDetailsBookingPage";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/home/HomePage";
import EditProfile from "./components/profile/EditProfile";
import ProfilePage from "./components/profile/ProfilePage";
import { ProtectedRoute, AdminRoute } from "./service/guard";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              {/* Public Routes */}
              <Route exact path="/home" element={<HomePage />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/rooms" element={<AllRoomsPage />} />
              <Route path="/find-booking" element={<FindBookingPage />} />

              {/* Protected Routes */}
              <Route
                path="/room-details-book/:roomId"
                element={
                  <ProtectedRoute element={<RoomDetailsBookingPage />} />
                }
              />
              <Route
                path="/profile"
                element={<ProtectedRoute element={<ProfilePage />} />}
              />
              <Route
                path="/edit-profile"
                element={<ProtectedRoute element={<EditProfile />} />}
              />

              {/* Admin Routes */}
              <Route
                path="/admin"
                element={<AdminRoute element={<AdminPage />} />}
              />
              <Route
                path="/admin/manage-rooms"
                element={<AdminRoute element={<ManageRoomPage />} />}
              />
              <Route
                path="/admin/edit-room/:roomId"
                element={<AdminRoute element={<EditRoomPage />} />}
              />
              <Route
                path="/admin/add-room"
                element={<AdminRoute element={<AddRoomPage />} />}
              />
              <Route
                path="/admin/manage-bookings"
                element={<AdminRoute element={<ManageBookingsPage />} />}
              />
              <Route
                path="/admin/edit-booking/:bookingCode"
                element={<AdminRoute element={<EditBookingPage />} />}
              />

              {/* Fallback Route */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

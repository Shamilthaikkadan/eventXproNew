import React, { Suspense } from 'react';
import UserLayout from '../Layout/User Layout/UserLayout';
import AuthLayout from '../Layout/Auth Layout/AuthLayout';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/login/Login';
import Signup from '../Pages/Sign up/Signup';
import Otp from '../Pages/otp/Otp';
import Home from '../Pages/Home/Home';
import Settings from '../Pages/Settings/Settings';
import Event from '../Pages/Event/Event';

export default function MainRoute() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="otp" element={<Otp />} />
          </Route>
          <Route path="/" element={<UserLayout />}>
            <Route path="Home" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="event" element={<Event />} />

            {/* Uncomment if needed
            <Route path="signup" element={<Signup />} />
            <Route path="otp" element={<Otp />} />
            */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

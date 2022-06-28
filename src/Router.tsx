import { Route, Routes } from "react-router-dom";
import { Event } from "./screens/Event";
import { Subscribe } from "./screens/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { MapView } from './pages/MapView';
import { NoticeDetails } from './pages/NoticeDetails';
import { FileObjection } from './pages/FileObjection';
import { Archive } from './pages/Archive';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/notice/:id" element={<NoticeDetails />} />
          <Route path="/notice/:id/objection" element={<FileObjection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

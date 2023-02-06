import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Sidebar from "./Scenes/global/sidebar";
import Dashboard from "./Scenes/dashboard";
import React from 'react';
import Team from "./Scenes/Team/Team";
import Invoices from "./Scenes/Invoices/invoices";
import Contacts from "./Scenes/Contacts/contacts";
// import Bar from "./Scenes/bar";
import Form from "./Scenes/Form/Form";
// import Line from "./Scenes/line";
// import Pie from "./Scenes/pie";
// import FAQ from "./Scenes/faq";
// import Geography from "./Scenes/geography";
import Calendar from "./Scenes/Calendar/Calendar";

function App() {
  const[theme,colorMode] = useMode(); 
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element = {<Dashboard />} />
              <Route path="/Team" element = {<Team />} />
              <Route path="/Contacts" element = {< Contacts/>} />
              <Route path="/Invoices" element = {<Invoices />} />
              <Route path="/Form" element = {<Form />} />
              <Route path="/calendar" element = {<Calendar />} /> 
              {/* <Route path="/bar" element = {<Bar />} />
              <Route path="/contacts" element = {< Contacts/>} />
              <Route path="/form" element = {<Form />} />
              <Route path="/line" element = {<Line />} />
              <Route path="/pie" element = {<Pie />} />
              <Route path="/faq" element = {<FAQ />} />
              <Route path="/geography" element = {<Geography />} />
              <Route path="/calendar" element = {<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;

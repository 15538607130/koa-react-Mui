import { useState } from 'react'
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import routes from './router';
function App () {
  let element = useRoutes(routes)
  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App

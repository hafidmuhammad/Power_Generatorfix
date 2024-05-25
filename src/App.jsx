import { useState } from 'react'
import MainLayout from './Layouts/MainLayout'
import MainRouter from './routes/MainRouter'

function App() {

  return (
    <MainLayout>
      <MainRouter/>
    </MainLayout>
  )
}

export default App

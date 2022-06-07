import React, { useEffect, useState } from 'react'
import { createWorker, OEM, PSM } from 'tesseract.js'

function App() {
  const worker = createWorker({
    logger: (m) => console.log(m),
  })
  const doOCR = async () => {
    await worker.load()
    await worker.loadLanguage('tha+eng')
    await worker.initialize('tha+eng')
    await worker.setParameters({
      tessedit_ocr_engine_mode: OEM.TESSERACT_LSTM_COMBINED,
      tessedit_pageseg_mode: PSM.SINGLE_COLUMN,
      preserve_interword_spaces: '1',
      user_defined_dpi: 240,
    })
    const {
      data: { text },
    } = await worker.recognize('http://localhost:3000/ThaiIDCard.jpg')
    setOcr(text)
  }
  const [ocr, setOcr] = useState('Recognizing...')
  useEffect(() => {
    doOCR()
  })
  return (
    <div className="App">
      <p>{ocr}</p>
    </div>
  )
}

export default App

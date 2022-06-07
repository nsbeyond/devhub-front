const rewritePattern = require('regexpu-core')
import * as Excel from 'exceljs'
import { saveAs } from 'file-saver'
import React, { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { userLogin } from '../../utils/authApi'
import { swal } from '../../components/Modal'
import { setStore } from '../../redux/entitiesStore'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import _ from 'lodash'

const ExcelPage = React.forwardRef(({ props }, ref) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
    reset,
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const {
    generateRegexpuOptions,
  } = require('@babel/helper-create-regexp-features-plugin/lib/util')

  const { RegExp } = global
  try {
    new RegExp('a', 'u')
  } catch (err) {
    global.RegExp = function (pattern, flags) {
      if (flags && flags.includes('u')) {
        return new RegExp(
          rewritePattern(
            pattern,
            flags,
            generateRegexpuOptions({ flags, pattern })
          )
        )
      }
      return new RegExp(pattern, flags)
    }
    global.RegExp.prototype = RegExp.prototype
  }

  const createXLSX = async () => {
    const workbook = new Excel.Workbook()
    const worksheet = workbook.addWorksheet('Read and not reply Report')

    const headColums = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1']

    _.map(headColums, (cell) => {
      worksheet.getCell(cell).font = {
        name: 'Arial',
        size: 10,
        underline: false,
        bold: false,
      }
      worksheet.getCell(cell).alignment = {
        vertical: 'bottom',
        horizontal: 'center',
      }
      worksheet.getCell(cell).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '93c47d' },
      }
    })

    worksheet.columns = [
      {
        header: 'Cost Center',
        key: 'cc',
        width: 30,
      },
      {
        header: 'ชื่อโครงการ',
        key: 'name',
        width: 30,
      },
      {
        header: 'แนวราบ/แนวสูง',
        key: 'type',
        width: 30,
      },
      {
        header: 'Date',
        key: 'date',
        width: 15,
      },
      {
        header: 'จำนวนแชท 1-1 ยังไม่ได้ตอบ',
        key: 'no_reply_1on1',
        width: 30,
      },
      {
        header: 'จำนวนแชทกลุ่มยังไม่ได้ตอบ',
        key: 'no_reply_group',
        width: 40,
      },
      {
        header: 'Zone Manager',
        key: 'zm',
        width: 20,
      },
      {
        header: 'Area Manager',
        key: 'am',
        width: 20,
      },
      {
        header: 'BM/VM',
        key: 'bm_vm',
        width: 25,
      },
    ]

    const mockupData = [
      {
        cc: `รหัสโครงการ 1`,
        name: 'John Doe 1',
        type: 'xx',
        date: new Date(),
        no_reply_1on1: 'xx',
        no_reply_group: 'xx',
        zm: 'ชื่อนายA',
        am: 'ชื่อนายB',
        bm_vm: 'ชื่อนายC',
      },
      {
        cc: `รหัสโครงการ 2`,
        name: 'John Doe 2',
        type: 'xx',
        date: new Date(),
        no_reply_1on1: 'xx',
        no_reply_group: 'xx',
        zm: 'ชื่อนายA',
        am: 'ชื่อนายB',
        bm_vm: 'ชื่อนายC',
      },
      {
        cc: `รหัสโครงการ 3`,
        name: 'John Doe 3',
        type: 'xx',
        date: new Date(),
        no_reply_1on1: 'xx',
        no_reply_group: 'xx',
        zm: 'ชื่อนายA',
        am: 'ชื่อนายB',
        bm_vm: 'ชื่อนายC',
      },
      {
        cc: `รหัสโครงการ 4`,
        name: 'John Doe 4',
        type: 'xx',
        date: new Date(),
        no_reply_1on1: 'xx',
        no_reply_group: 'xx',
        zm: 'ชื่อนายA',
        am: 'ชื่อนายB',
        bm_vm: 'ชื่อนายC',
      },
      {
        cc: `รหัสโครงการ 5`,
        name: 'John Doe 5',
        type: 'xx',
        date: new Date(),
        no_reply_1on1: 'xx',
        no_reply_group: 'xx',
        zm: 'ชื่อนายA',
        am: 'ชื่อนายB',
        bm_vm: 'ชื่อนายC',
      },
    ]

    _.map(mockupData, (data) => {
      worksheet.addRow(data)
    })

    // worksheet.addRow({
    //   cc: `รหัสโครงการ`,
    //   name: 'John Doe',
    //   type: 'xx',
    //   date: new Date(),
    //   no_reply_1on1: 'xx',
    //   no_reply_group: 'xx',
    //   zm: 'ชื่อนายA',
    //   am: 'ชื่อนายB',
    //   bm_vm: 'ชื่อนายC',
    // })

    // Add row style
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell, colNumber) => {
        row.getCell(colNumber).font = {
          name: 'Arial',
          size: 10,
          underline: false,
          bold: false,
        }
      })
    })

    return await workbook.xlsx
      .writeBuffer()
      .then((buffer) =>
        saveAs(new Blob([buffer]), `${Date.now()}_feedback.xlsx`)
      )
      .catch((err) => console.log('Error writing excel export', err))
  }

  useEffect(() => {
    // setFocus('username')
  })

  return (
    <>
      <NextSeo
        title="DevHub - ExcelJS"
        description="DevHub - Developer Community in Thailand"
      />
      <div className="w-full max-w-xs">
        <a href="#" onClick={createXLSX}>
          Download Report Excel
        </a>
      </div>
    </>
  )
})

export default ExcelPage

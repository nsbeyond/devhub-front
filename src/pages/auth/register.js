import React, { Component } from 'react'
import { NextSeo } from 'next-seo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from 'next/link'

const RegisterScreen = (props) => {
  return (
    <>
      <NextSeo
        title="DevHub - Register"
        description="DevHub - Developer Community in Thailand"
      />
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              ชื่อผู้ใช้งาน
            </label>
            <Input
                fontFamily="Kanit"
                fontSize={18}
                bgColor="#fff"
                borderColor="#1d76d6"
                hoverBgColor="#fffeee"
                placeholder='ชื่อผู้ใช้งาน'
                type="text"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              รหัสผ่าน
            </label>
            <Input
                fontFamily="Kanit"
                fontSize={18}
                bgColor="#fff"
                borderColor="#1d76d6"
                hoverBgColor="#fffeee"
                placeholder='รหัสผ่าน'
                type="password"
            />
            <p class="text-red-500 text-xs italic">กรุณาเลือกกรอกรหัสผ่าน</p>
          </div>
          <div class="flex items-center justify-between">
            <Link href={`/auth`}>
              <Button
                fontFamily="IBM Plex Sans Thai Looped"
                fontSize={18}
                fontWeight="bold"
                bgColor="#fff"
                color="#1d76d6"
                hoverColor="#fff"
                hoverBgColor="#1d76d6"
                borderColor="#1d76d6"
              >
                ลงทะเบียน
              </Button>
            </Link>

            <Button
                fontFamily="IBM Plex Sans Thai Looped"
                fontSize={18}
                fontWeight="bold"
                bgColor="#d61d33"
                color="#fff"
                hoverColor="#d61d33"
                hoverBgColor="#fff"
                borderColor="#d61d33"
              >
                ยกเลิก
            </Button>
          </div>
          <div class="flex items-center justify-center">
            <Link className="navbar" href="/auth">
              เข้าสู่ระบบ
            </Link>
          </div>
        </form>
      </div>
    </>
  )
};

export default RegisterScreen;

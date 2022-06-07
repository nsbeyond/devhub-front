import React, { useState, useEffect, useRef } from 'react'
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

const RegisterScreen = React.forwardRef(({ props }, ref) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
    reset,
    watch,
  } = useForm()

  const password = useRef({})
  password.current = watch('password', '')

  const [isLoading, setIsLoading] = useState(false)

  const submitLogin = (formData) => {
    // setIsLoading(true)
    // setTimeout(async () => {
    //   const resp = await userLogin(formData)
    //   if (resp.success) {
    //     dispatch(setStore({ data: resp.data, jwt: resp.token }))
    //     router.push('/')
    //     // swal({
    //     //   title: 'ข้อความจากระบบ',
    //     //   html: 'เข้าสู่ระบบเรียบร้อย กรุณารอสักครู่...',
    //     //   icon: 'success',
    //     //   showConfirmButton: false,
    //     //   allowOutsideClick: false,
    //     // })
    //   } else {
    //     swal({
    //       title: 'ข้อความจากระบบ',
    //       html: 'ชื่อผู้ใช้งาน หรือ รหัสผ่านไม่ถูกต้อง',
    //       icon: 'warning',
    //       allowOutsideClick: false,
    //     })
    //     reset({ username: '', password: '' })
    //     setIsLoading(false)
    //   }
    // }, 1000)
  }

  useEffect(() => {
    // setFocus('username')
  })

  return (
    <>
      <NextSeo
        title="DevHub - Login"
        description="DevHub - Developer Community in Thailand"
      />
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit((formData) => {
            submitLogin(formData)
          })}
        >
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              ชื่อผู้ใช้งาน
            </label>
            {errors.username?.type === 'required' && (
              <p className="text-red-500 text-xs italic">
                * กรุณากรอกชื่อผู้ใช้งาน
              </p>
            )}
            {/* {errors.username?.type === 'pattern' && (
              <p className="text-red-500 text-xs italic">
                {errors.username?.message}
              </p>
            )} */}
            <Input
              label="username"
              register={register}
              required
              // pattern={{ value: /^[0-9]+$/i, message: 'กรุณากรอก 0-10' }}
              fontFamily="Kanit"
              fontSize={18}
              bgColor="#fff"
              borderColor={
                errors.username?.type === 'required' ? '#FF0000' : '#1d76d6'
              }
              hoverBgColor="#fffeee"
              placeholder="ชื่อผู้ใช้งาน"
              type="text"
              disabled={isLoading}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              รหัสผ่าน
            </label>
            {errors.password?.type === 'required' && (
              <p className="text-red-500 text-xs italic">* กรุณากรอกรหัสผ่าน</p>
            )}
            <Input
              label="password"
              register={register}
              required
              fontFamily="Kanit"
              fontSize={18}
              bgColor="#fff"
              borderColor={
                errors.password?.type === 'required' ? '#FF0000' : '#1d76d6'
              }
              hoverBgColor="#fffeee"
              placeholder="รหัสผ่าน"
              type="password"
              disabled={isLoading}
            />
            {/* <p className="text-red-500 text-xs italic">กรุณาเลือกกรอกรหัสผ่าน</p> */}
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm_password"
            >
              ยืนยันรหัสผ่าน
            </label>
            {errors.confirm_password && (
              <p className="text-red-500 text-xs italic">
                * {errors.confirm_password.message}
              </p>
            )}
            <Input
              label="confirm_password"
              register={register}
              fontFamily="Kanit"
              fontSize={18}
              bgColor="#fff"
              borderColor={
                errors.password?.type === 'required' ? '#FF0000' : '#1d76d6'
              }
              hoverBgColor="#fffeee"
              placeholder="รหัสผ่าน"
              type="password"
              disabled={isLoading}
              required
              validate={{
                validate: (value) =>
                  value === password.current || 'กรุณากรอกรหัสผ่านให้ตรงกัน',
              }}
            />
            {/* <p className="text-red-500 text-xs italic">กรุณาเลือกกรอกรหัสผ่าน</p> */}
          </div>
          <div className="flex items-center justify-between">
            <Button
              fontFamily="IBM Plex Sans Thai Looped"
              fontSize={18}
              fontWeight="bold"
              bgColor="#fff"
              color="#1d76d6"
              hoverColor="#fff"
              hoverBgColor="#1d76d6"
              borderColor="#1d76d6"
              type="submit"
              isLoading={isLoading}
            >
              สมัครสมาชิก
            </Button>
            <Button
              fontFamily="IBM Plex Sans Thai Looped"
              fontSize={18}
              fontWeight="bold"
              bgColor="#d61d33"
              color="#fff"
              hoverColor="#d61d33"
              hoverBgColor="#fff"
              borderColor="#d61d33"
              type={isLoading ? 'button' : 'reset'}
              onClick={() => {
                if (!isLoading) {
                  reset({ username: '', password: '' })
                }
              }}
            >
              ยกเลิก
            </Button>
          </div>
          <div className="flex items-center justify-center pt-5">
            <Link href={`/auth`} refs={ref}>
              <a className="pr-2.5">เข้าสู่ระบบ</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
})

export default RegisterScreen

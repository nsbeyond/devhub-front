import React, { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { clearStore } from '../../redux/entitiesStore'

const navigation = [
  { name: 'ดาวน์โหลด', href: '/', current: true },
  { name: 'แนะนำการเล่น', href: '#', current: false },
  { name: 'ข่าวสาร', href: '#', current: false },
  { name: 'เติมเงิน', href: '#', current: false },
  { name: 'Facebook', href: '#', current: false },
  { name: 'ติดต่อเรา', href: '#', current: false },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const dispatch = useDispatch()

  const isLogin = useSelector(({ entities }) => _.get(entities, 'userData.jwt'))
  const userData = useSelector(({ entities }) =>
    _.get(entities, 'userData.data')
  )

  const handleLogout = () => {}
  useEffect(() => {
    console.log({ userData })
    // dispatch(clearStore())
  })
  return (
    <Disclosure as="nav" className="pr-3 pl-3">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <a
                    key="0"
                    href="#"
                    className="btn-primary navbar-bg text-white px-3 py-2"
                  >
                    DEVHUB
                  </a> */}

                  <img
                    className="object-cover block lg:hidden h-16 w-32"
                    src={`${process.env.APP_URL}/logo-devhub.webp`}
                    alt="Workflow"
                  />
                  <img
                    className="object-cover hidden lg:block h-16 w-32"
                    src={`${process.env.APP_URL}/logo-devhub.webp`}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 md:block md:ml-6 lg:block lg:ml-6">
                  <div className="navbar flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        passHref
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'btn-primary navbar-bg text-white'
                            : 'btn-primary text-black-300 hover:text-white',
                          'px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {isLogin && (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={_.get(userData, 'profile_image')}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              onClick={handleLogout}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar

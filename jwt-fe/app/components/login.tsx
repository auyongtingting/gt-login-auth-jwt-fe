"use client"
import { useRouter } from "next/navigation"
import { FormEventHandler, useState } from "react"
import { getPassword } from "@/api"

const Login = () => {
    const router = useRouter()
    const [enteredEmail, setEnteredEmail] = useState<string>('')
    const [enteredPassword, setEnteredPassword] = useState<string>('')

    const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await getPassword ({
            email: enteredEmail,
            password: enteredPassword
        })
        router.push('/homepage')
    }

    return (
      <section className="h-screen">
      <div className="h-full">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-10 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" onChange={e => setEnteredEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" onChange={e => setEnteredPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg bg-slate-100 text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
        </div>
      </div>
    </section>
    )
  }
  
  export default Login
  
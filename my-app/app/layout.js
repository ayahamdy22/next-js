import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav style={{width:'100%',
       background:'teal',
       fontSize:'50px',
       display:'flex',
       justifyContent:'center',
       alignItems:'center'
    }}>
        <Link style={{margin: "7px"}} href='/'>Home</Link>
        <Link style={{margin: "7px"}} href='/articles'>Articles</Link>
        <Link style={{margin: "7px"}} href='/posts'>Posts</Link>
      </nav >
        {children}</body>
    </html>
  )
}

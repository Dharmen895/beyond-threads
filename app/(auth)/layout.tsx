import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from 'next/font/google'
import '../globals.css'




export const metadata = {
    title:'Beyond Threads',
    description:'Beyond Threads is a social media platform that allows users to create and join threads to discuss topics they are interested in.'
}

const inter = Inter({subsets:['latin']})

export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}</body>
        </html>
        </ClerkProvider>
    )
}
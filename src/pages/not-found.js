import React, { useEffect } from 'react'
import Header from '../components/header'

export default function NotFound() {

    useEffect(() => {
        document.title="404 - Not Found"
    })

    return (
        <>
        <Header />
        <div className="bg-gray-200">
            <div className="mx-auto max-w-screen-lg py-4">
                <p className="text-center text-3xl">Not Found!</p>
            </div>
        </div>
        </>
    )
}
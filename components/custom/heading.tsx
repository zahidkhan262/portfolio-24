import React from 'react'

const Heading = ({ first, second }: { first: string, second: string }) => {
    return (
        <h1 className="md:p-10 p-5 heading md:text-5xl text-2xl">
            {first} <span className="text-purple ">{second}</span>
        </h1>
    )
}

export default Heading
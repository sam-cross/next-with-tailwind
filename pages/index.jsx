import Head from "next/head";

export default function Home() {
    return (
        <div className='max-w-sm my-16 mx-auto p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md dark:shadow-inner flex items-center space-x-4'>
            <Head />

            <div className='flex-shrink-0 px-4'>
                <img className='h-12 w-12' src='/vercel.svg' alt='Logo' />
            </div>

            <div>
                <p className='pb-2 text-xl font-medium text-black dark:text-white'>
                    Next with Tailwind
                </p>
                <p className='text-gray-500 dark:text-gray-300'>
                    Open <code>pages/index.js</code> and start hacking!
                </p>
            </div>
        </div>
    );
}

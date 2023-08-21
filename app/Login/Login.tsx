import React from 'react';
import { Poppins } from 'next/font/google';
const font = Poppins({
    subsets: ['latin'],
    weight: ['700']
});

const Login = () => {
    return (
        <div className=" relative rounded-[30px] w-[1010px] h-[605px] bg-neutral-800">
            <div className=' mt-[63px] mb-[56px] ml-[60px] w-[374px] h-[486.4px]'>
                <div className='flex justify-between'>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                </div>
                <div className='flex justify-between mt-[63px]'>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                </div>
                <div className={font.className}>
                    <div className=' pl-[155px] pt-[35px] text-[20px] text-white'>Any<span className=' text-sky-500'>.</span>do</div>
                    <div className='flex justify-between'>
                        <h1 className='text-[46px] text-white'>Organize it all</h1>
                        <div className='w-[32px] h-[32px]  mt-[20px] rounded-[50%] bg-blue-500'></div>
                    </div>
                </div>
                <div className='flex justify-between  pt-[63px]'>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                </div>
                <div className='flex justify-between  pt-[63px]'>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                    <div className='w-[32px] h-[32px] rounded-[50%] bg-zinc-400'></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
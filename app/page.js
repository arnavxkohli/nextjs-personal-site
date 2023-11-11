'use client'
import Image from "next/image";
import {useState} from "react";

function NavBar(){
    const [selected, useSelected] = useState("home")

    return(
        <div className="flex">
            <div className="flex-1 m-[3%] ml-[10%] justify-center items-center font-space">
                <button className="p-4 text-[#FF9B50] text-xl hover:text-black">arnavxkohli;</button>
            </div>
            <div className="flex m-[3%] mr-[10%] flex-1 text-xs items-center justify-end">
                <button className={"p-4 mt-auto mb-auto hover:text-[#FF9B50]"}>
                    Home
                </button>
                <button className={"p-4 mt-auto mb-auto hover:text-[#FF9B50]"}>
                    About
                </button>
                <button className={"p-4 mt-auto mb-auto hover:text-[#FF9B50]"}>
                    Experience
                </button>
                <button className={"p-4 mt-auto mb-auto hover:text-[#FF9B50]"}>
                    Contact
                </button>
            </div>
        </div>
        )
}

function Home(){
    return(
        <div className="flex bg-[#FFBB5C]">
            <div className={"flex-1 text-left mt-[12%] m-[5%] ml-[10%]"}>
                <h1 className={"text-5xl p-4 pr-0"}>Hello, I&apos;m Arnav!</h1>
                <p className={"text-lg p-4 pb-0"}>Student by day 👷🏻</p>
                <p className={"text-lg p-4 pt-0"}> Developer by night 💻‍</p>
                <button className={"m-4 rounded hover:bg-[#F94C10] text-[#FFBB5C] bg-[#C70039] text-lg py-3 px-4"}>
                    Download CV
                </button>
            </div>
            <div className={"m-[10%] p-4 flex flex-1 justify-end"}>
                <Image src={'/me.png'} alt={'me'} height={300} width={300} />
            </div>
        </div>
    )
}

function About(){
    function AboutStatement({heading, text, image, text_align}){
        if (text_align === "left"){
            return(
                <div className={"flex pb-[2%] pt-[3%]"}>
                    <div className={"flex-1 pr-[2%]"}>
                        <h2 className={'text-2xl py-[5%]'}>{heading}</h2>
                        <p>{text}</p>
                    </div>
                    <div className={"flex flex-1 pl-[2%] items-center justify-end"}>
                        {image}
                    </div>
                </div>
            )
        } else {
            return(
                <div className={"flex pb-[2%] pt-[3%]"}>
                    <div className={"flex flex-1 pr-[2%] items-center"}>
                        {image}
                    </div>
                    <div className={"text-right flex flex-col flex-1 pl-[2%] justify-end"}>
                        <h2 className={'text-2xl py-[5%]'}>{heading}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            )
        }
    }

    return(
        <div className={"ml-[10%] mr-[10%]"}>
            <h1 className={"text-4xl pt-[6%] p-[2%]"}> About </h1>
            <div className={"p-[2%]"}>
                I am a third year undergraduate studying Computer Engineering at Imperial College London.
                I have a keen interest in building all sorts of software, be it low level embedded development,
                or high level game development!
                <AboutStatement
                    heading={"OffBalance"}
                    text={`Developed a back-end with NodeJS, ExpressJS and MongoDB on AWS-EC2; employing Dijkstra's  algorithm for a robot navigating via computer vision, to find the shortest path through a maze and map it.`}
                    image={"[placeholder]"}
                    text_align={"right"}
                />
                <AboutStatement
                    heading={"EDGE"}
                    text={`Developed a game based on the popular samsung game of the same name in Unity3D. Also wrote API in C# for communication with flask based back-end over HTTP.`}
                    image={"[placeholder]"}
                    text_align={"left"}
                />
                <AboutStatement
                    heading={"This Website!"}
                    text={"Powered by NextJS and Vercel, this page was built in the endeavour to improve my full-stack development skills and learn how the React framework works on a simple use-case."}
                    image={"[placeholder]"}
                    text_align={"right"}
                />
            </div>
        </div>
    )
}

function Experience(){
    return(
        <div className="bg-[#FFBB5C]">

        </div>
    )
}

function Contact(){
    return(
        <div>

        </div>
    )
}

function Footer(){
    let img_size = 21

    return(
        <div className="bg-[#FFBB5C] flex flex-col items-center justify-center">
            <div className="m-4">
                <button className='p-3'>
                    <Image src='/icons/linkedin.svg' alt='linkedin' height={img_size} width={img_size}/>
                </button>
                <button className='p-3'>
                    <Image src='/icons/github.svg' alt='github' height={img_size} width={img_size}/>
                </button>
                <button className='p-3'>
                    <Image src='/icons/x.svg' alt='x' height={img_size} width={img_size}/>
                </button>
                <button className='p-3'>
                    <Image src='/icons/google.svg' alt='google' height={img_size} width={img_size}/>
                </button>
                <button className='p-3'>
                    <Image src='/icons/instagram.svg' alt='instagram' height={img_size} width={img_size}/>
                </button>
            </div>
            <div className='text-sm m-4'>
                <p>© Arnav Kohli 2023</p>
            </div>
        </div>
    )
}

export default function Page() {
  return (
    <main className="font-kanit">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Contact />
        <Footer />
    </main>
  )
}

import Chart from '@/components/Chart/Chart';
import DetCard from '@/components/DetCard';
import { notFound } from 'next/navigation';
import React, { use } from 'react';
import { BarChart } from 'recharts';
// import { BarChart, XAxis, YAxis } from 'recharts';
// import { metadata } from './../../layout';


export async function generateMetadata({ params }) {
    const data = await fetch('https://mocki.io/v1/e21d346b-58f4-4402-8d89-a9763c19f2d2')
    const app = await data.json()
    const id = await params
    const dynamicId = id.id
    const expectedApp = app.find(ap => ap.id === Number(dynamicId))

    if (!expectedApp) {
        return {
            title: `not found the web application`,
        }
    }

    return {
        title: `${expectedApp.title} || web application`,
        description: `${expectedApp.description}`
    }
}



const AppsDetailsPage = async ({ params }) => {
    const data = await fetch('https://mocki.io/v1/e21d346b-58f4-4402-8d89-a9763c19f2d2')
    const app = await data.json()
    const id = await params
    const dynamicId = id.id
    const expectedApp = app.find(ap => ap.id === Number(dynamicId))
    if (!expectedApp) {
        notFound()
    }



    return (
        <div className='bg-[#D2D2D220] mt-5'>
            <div className="max-w-11/12 mx-auto">
                <DetCard expectedData={expectedApp} />


                <div className="divider"></div>

                <div className="">
                    <h1 className='text-2xl font-bold'>Rating</h1>
                    <Chart expectedApp={expectedApp} />

                </div>
                <div className="divider"></div>
                <h1 className='text-2xl font-bold mt-4'>Description</h1>
                <div className="text-[#627382] space-y-10 py-10">

                    <p>This focus app takes the proven Pomodoro technique and makes it even more p  ractical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
                    </p>
                    <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
                    </p>
                    <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
                </div>
            </div>

        </div>
    );
};

export default AppsDetailsPage;
import React from 'react';
// import { metadata } from './../../layout';


export const metadata = {
    title:"details of the application"
}




const AppsDetailsPage = async ({params}) => {
    const id = await params
    const dynamicId = id.id
    console.log(dynamicId)


    return (
        <div>
            <h1>this is app details page</h1>
        </div>
    );
};

export default AppsDetailsPage;
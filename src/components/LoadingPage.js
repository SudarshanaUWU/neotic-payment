import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

export default function LoadingPage({ isLoading}) {
    if(isLoading){
        return (
            <div>
                <LoadingScreen
                    loading={isLoading}
                    bgColor='#f1f1f1'
                    spinnerColor='#9ee5f8'
                    textColor='#676767'
                    logoSrc='../Images/neotic.png'
                    text='Your Payment is Processing......Please Wait...... '
                />
            </div>
    );
    }
    else{
        return (
            <div> </div>
        )
    }
};


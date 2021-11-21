import React from 'react'

export const About = () => {
    return (
        <div>
            
            <h2 className="my-3 text-center">iFirsto ToDos List</h2>
            <img className="my-4 text-center" src="https://source.unsplash.com/1400x400/?list,paper,pen" class="img-fluid" />
            <div className="container my-3"></div>

    
            <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                <div class="my-3 py-3">
                    <h2 class="display-5"> iFirsto's Product</h2>
                    <p class="lead">iFirsto ToDos List is here to prioritize your daily works which are more important to you. The list is customized, you can add or delete your works. The list offer a way to increase your productivity, stopping you forgetting things, manage tasks effectively, use time wisely and improve the time management as well as workflow.</p>
                </div>
                {/* <img className="my-4 text-center" src="https://source.unsplash.com/1400x400/?code" class="img-fluid" /> */}
            </div>
            <div class="container my-4"> </div>
        </div>

    )
}

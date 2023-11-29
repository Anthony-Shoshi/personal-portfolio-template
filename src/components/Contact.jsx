import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-heading-color text-xl font-semibold mb-5'>Get In Touch</h3>
                <h1 className="text-heading-color md:text-6xl text-4xl font-bold my-7">Contact me</h1>
                <p className='text-body text-xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='md:w-2/3 mx-auto mb-20'>
                <form>
                    <div className='flex flex-col sm:flex-row items-center gap-5 mb-8'>
                        <div className='sm:w-1/2 w-full'>
                            <label htmlFor="fname" className='text-base text-heading-color w-full'>First Name</label>
                            <input type="text" name='fname' id='fname' className='mt-2 border-primary border rounded-lg w-full p-3' />
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <label htmlFor="lname" className='text-base text-heading-color w-full'>Last Name</label>
                            <input type="text" name='lname' id='lname' className='mt-2 border-primary border rounded-lg w-full p-3' />
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-5 mb-8'>
                        <div className='sm:w-1/2 w-full'>
                            <label htmlFor="email" className='text-base text-heading-color w-full'>Email</label>
                            <input type="email" name='email' id='email' className='mt-2 border-primary border rounded-lg w-full p-3' />
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <label htmlFor="phone" className='text-base text-heading-color w-full'>Phone</label>
                            <input type="text" name='phone' id='phone' className='mt-2 border-primary border rounded-lg w-full p-3' />
                        </div>
                    </div>
                    <div className='w-full mb-8'>
                        <label htmlFor="topic" className='text-base text-heading-color w-full'>Choose a topic</label>
                        <select name="topic" id="topic" className='border border-primary rounded-lg w-full p-3 mt-2'>
                            <option value="">Select one...</option>
                            <option value="">Web Solution</option>
                            <option value="">Mobile App</option>
                        </select>
                    </div>
                    <div className='w-full mb-8'>
                        <label htmlFor="message" className='text-base text-heading-color w-full'>Message</label>
                        <textarea name="message" id="message" rows="8" placeholder='Type your message...' className='border border-primary rounded-lg w-full p-3 mt-2'></textarea>
                    </div>
                    <div className='w-full mb-8'>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms" className='text-base text-heading-color w-full ml-3'>I accept the terms</label>
                    </div>
                    <div className='mx-auto w-36'>
                        <button type="submit" className='px-5 py-3 bg-primary border rounded-lg text-white transition-all duration-300 hover:translate-y-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
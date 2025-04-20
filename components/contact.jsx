import { section } from 'framer-motion/client';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function Contact() {
    return (
        <section className='flex flex-col items-center font-inter'>
            <h2 className='font-raleway text-3xl font-bold'>Get in touch</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-my-off-white'>
                <div className='bg-my-black'>
                    <div>
                        <p>We would love to hear from you</p>
                    </div>
                    <div>
                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}
                            validationSchema={Yup.object({
                                name: Yup.string().required('Name is required'),
                                email: Yup.string().email('Invalid email').required('Email is required'),
                                message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
                            })}
                            onSubmit={(values, { resetForm }) => {
                                console.log('Form submitted:', values);
                                resetForm();
                            }}
                        >
                            {({ errors, touched }) => (
                                <form>
                                    <div>
                                        <label htmlFor="name" className="block text-lg font-medium">Name</label>
                                        <Field
                                            name="name"
                                            type="text"
                                            className="w-full py-2 px-4 rounded-full outline-0 focus:outline-2 focus:outline-my-highlight bg-gray-900"
                                            placeholder="Your Name"
                                        />
                                        {errors.name && touched.name && (
                                            <div className="text-red-500 text-sm">{errors.name}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                                        <Field
                                            name="email"
                                            type="email"
                                            className="w-full py-2 px-4 rounded-full outline-0 focus:outline-2 focus:outline-my-highlight bg-gray-900"
                                            placeholder="you@example.com"
                                        />
                                        {errors.name && touched.name && (
                                            <div className="text-red-500 text-sm">{errors.email}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                                        <Field
                                            name="email"
                                            type="email"
                                            className="w-full py-2 px-4 rounded-full outline-0 focus:outline-2 focus:outline-my-highlight bg-gray-900"
                                            placeholder="you@example.com"
                                        />
                                        {errors.name && touched.name && (
                                            <div className="text-red-500 text-sm">{errors.email}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <Field
                                            type="text"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            className="w-full py-2 px-4 rounded-full outline-0 focus:outline-2 focus:outline-my-highlight bg-gray-900"
                                            placeholder="Enter your phone number"
                                        />
                                        {errors.phoneNumber && touched.phoneNumber && (
                                            <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-lg font-medium">Message</label>
                                        <Field
                                            name="message"
                                            as="textarea"
                                            rows="4"
                                            className="w-full py-2 px-4 rounded-lg outline-0 focus:outline-2 focus:outline-my-highlight bg-gray-900"
                                            placeholder="Your message"
                                        />
                                        {errors.message && touched.message && (
                                            <div className="text-red-500 text-sm">{errors.message}</div>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className='bg-gray-600'></div>
            </div>
        </section>
    )
}

export default Contact
# React-Project-sayali

# parcel
- dev build 
- local server 
- HMR = Hot module replacement 
- use File watching algorithm - written in c++
- caching - faster builds 
- image optimization
- Minification 
- bunddling 
- Compressing 
- consistent hashing
- code splitting    
- Diffrencial bundling - provide a different bunddling according to browsers and its versions 
- Good Error handling 
- dignosis 
- provide a HTTPS for dev server as well 
- Tree shaking algorithm  - Remove unwanted code 
- different Dev and production bulid 


# @types of routing in web application 
- server side routing 
    for example in previous days we make a routing using <a href> tag this will make the network call and fetch the data for those pages 
- client side routing 
    In React /Client side routing, page not get refreshed it will only change the component, no any network call 
    application having only one page (app) hence react is one page application and very fast 

# Redux Toolkit
1. Install @reduxjs/toolkit and react-redux
2. build our store 
3. connect to store
4. create a slice 
5. dispatch(Action )
6. selector  

# Type of testing 
1. unit testing 
2. Integration testing 
3. End to End testing (e2e)

1. Unit testing (Developer)
    - Test your component in isolation
    - small unit of your application can test , unit = specific component 


2. Integration testing (developer)
    - testing integration of component 
    - multiple components are communicating to each other 
    - we are testing a flow between them for example search filter, button click, input change

3. End - End thesting (QA)
    - once user landed on the application till user leaves the application 
    - user flow accross the application
    - require different tools (selenium) 

# Tools for testing 
1. React testing library
    - use jest(Javascript testing library) behind the scen 

# setting Testing library 
1. Install React Testing librbry 
2. Install jest 
3. Install babel dependancy as we are using parcel 
4. setup a bable config file
5. configure a parcel config file to disable a babel transpilation in parcel (Why ? beacause we are 
    using parcel and by default parcel is also using a babel so parecel having its own babel config file and in our applicaion  we are creating a seperate bable.config file for jest so to avoid conflicts we are disabling bable config file of parcel )
6. Do jest configuration (npm init jest@latest) check the doc. 
   # JSDOM SERVER :  
   - required to run test case it is like browser 
   - to run test cases reuire a runtime so JSDOM is a runtime like browser for example if we want to test header component so header component will render on this broser/JSDOM
7. install jsdom library 
    Check the react testing library doc => setup => choose jest28 
8. install @babel/preset-react liabrary  => to test jsx component 
9. include @babel/preset-react library into bable.config.js file
10. install @testing-library/jest-dom (npm i -D @testing-library/jest-dom)
 
# info 
 - the file name with __ (underscore underscore). at end and beginning is called dunder 
 - jest is used the reserved syntax to find out the test file 
 - we can write test file anywhere or any foler like below jest will find out that those are test file 
    Header(file/component name).test.js
    Header.test.ts
    Header.spect.js/jsx
    header.spect.ts/tsx
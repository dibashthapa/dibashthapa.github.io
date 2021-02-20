---
title: 'How did I stop fearing about redux ?'
subtitle: 'In this blog, I talk about how i stopped fearing about redux.'
date: '2021-02-19'
keywords: 'blog , redux ,react'
---

## **What is Redux?**

Redux is an open-source JavaScript library for managing application state. It is most commonly used with **React**.
In simple words , It is just a tool to manage the state between components

## **How did I learn Redux ?**

As you know , how hard is to learn Redux for a complete beginner. I searched it on youtube, but I didn't find a good video , which could give me the better understanding of redux. Finally , I landed a good tutorial by **Hitesh Choudhary**. He helped me to understand the Redux in an easy way.

If you are having a hard time to learn Redux, then you can watch his video on Youtube
[![](http://img.youtube.com/vi/np8A_aW7Pew/0.jpg)](http://www.youtube.com/watch?v=np8A_aW7Pew 'Redux')

## **How did I use to implement Redux ?**

First , I would create a **store** folder inside the **src** directory. And , Inside the **store** directory , I would create **actions.js** , **reducers.js** and **index.js**.

- **actions.js** for adding the name of the actions and functions
- **reducers.js** for managing the state , when an action is dispatched
- **index.js** for exporting the **actions** and **reducers**.

## **How did I stop fearing about Redux?**

Well , I thought I was doing it in a wrong way, until I saw the code of my company project. After learning React for 6 months , I finally applied for a job and luckily I was selected too. I was assigned to create a **dashboard** for vendor admin in **POS** system.

I saw multiple reducers and actions used for **Dashboard** page. I was afraid and sweating, because I used to think , using multiple actions and reducer for simple tasks would be considered a bad practice. But, It wasn't. Multiple actions and reducers were used in multiple components and pages. I was shocked for a moment.

For my personal react projects , I used to use **Redux** only for managing the auth state. I used to use axios for **CRUD** actions , although it could be easily managed by **Redux**.

There were multiple **store** folder for multiple components in my company project. I used Redux for managing the CRUD operations. And it was fun. All that fear that I had before was gone by just implementing multiple actions and reducers. I created multiple components and multiple redux actions for managing the business logic applications.

It was a good experience to work with the experienced developers. I learned how to use redux. I saw my senior dev using **Promise** to call the **resolve** and **reject** function using redux saga. LOL , I never thought that I could call **Promise** by dispatching the **actions**

## **Conclusion**

Redux is not complicated. You have to use Redux in multiple components to understand it much easily.

It is hard to configure Redux for you react application. Still , I have to copy and paste to configure Redux for my react application. Though , I understand how it works under the hood, I still have a hard time to configure it. LOL

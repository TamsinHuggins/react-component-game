# React Component Game

## Overview
This game will farmiliarise you with essential React concepts including:
- React Components (level 1)
    - React components are reusable and customisable
    - How to render components in a parent component
    - How to export and import components
    - How to make component instances cusomizable with props

- Stateful React Components (level 2)
    - Components can have stateful variables
    - Stateful variables manage re-renders of components
    - The UseState hook for creating stateful variables 
    - Stateful variables must be updated via their setter that is created by UseState
    - The state setter can be passed from a parent to a child component through props


## Prerequisites
You should have React installed
You should have previous exposure to coding concepts: functions, variables, arrays (or "lists"). This is not suitable for total beginners to programming.

## To get started


```
git clone https://github.com/TamsinHuggins/react-component-game
cd react-component-game/level-1
npm install
npm run dev
```
You should see that the app appears as shown in the browser

<img src="https://github.com/TamsinHuggins/react-component-game/assets/32196191/8c760907-a665-471d-b24f-7fa3f1320186" width="500"/>
 
# Level-1


## Challenge 1.1
Make the UI appear as pictured by changing the code in App.jsx

<img src=https://github.com/TamsinHuggins/react-component-game/assets/32196191/f89e675e-109c-4eee-b740-ab551104a656 width="500"/>

## Challenge 1.2
Make the UI appear as pictured by changing the code in App.jsx
Hint: there already exists a Triangle component you can use.

<img src="https://github.com/TamsinHuggins/react-component-game/assets/32196191/e1ea3725-dc39-48ad-aa89-e91fe142d7de" width="500"/>

## Challenge 1.3 

Make the UI appear as pictured. You will need to: 
- Build a Square component in components that can change color based on props received
- Export the Square component
- Import it into App
- Render it multiple times in App
- There is already some styling information for the square that you can find in App.css
- Hint: the code in components/Circle.jsx should give you some ideas on how to start building your Square

<img src="https://github.com/TamsinHuggins/react-component-game/assets/32196191/dc02b23a-3d31-4384-9be1-2f45de367cf3" width="500"/>



# Level-2

## To get started on Level-2


```
cd ..
cd level-2
npm install
npm run dev
```

< img src="https://github.com/TamsinHuggins/react-component-game/assets/32196191/f4f2031a-0856-47bb-a234-883789c1b010" width="500" />



## Challenge 2.1
The instructor will show you how to make the Square component increase its counter by 1 every time it is clicked, showing you what NOT to do in the process.

<img src="https://github.com/user-attachments/assets/302bcd07-31d9-47cc-a70b-7ac1807a0537" width="500"/>


## Challenge 2.2
Make it so that the Circle component changes its color every time it is clicked. The circle component must cycle through at least 5 different colors. It is recommended to cycle through an array of colors.

<img src="https://github.com/user-attachments/assets/5d770a1d-f20c-46dd-950f-f9d84dc3ef86" width="500" />



## Challenge 2.3
Make a counter for "Total Clicks" that updates any time ANY shape on the page is clicked.




<img src="https://github.com/user-attachments/assets/d8142e68-6173-4864-a8a9-ef78986653da" width="500"/>



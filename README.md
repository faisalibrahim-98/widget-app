# Introduction

- This is a widget app that shouls you multiple widgets on your home screen.
- These widgets can be inteeracted with.
- I have added extra logic then needed just to replicate thedesign in figma.

- The main app component i responsible for getting the api data. When the data is loaded it then displays the Widget component in a loop based on the entires of widget data it gets.
- The widget component is the box widget component that you see on the screen.
- There is another component called SliderComponent which is a dummy component. This components takes the value from it's parent to dispaly the state of toggle.
- When the toggle is clicked it emits a signal which chagnes the sate in the parent component of the toggle.
- I have created some extra fucntons in with WidgetBox component
    1. ColorOptions: I have mapped the default color values to the hex values found in figma.(Just o the UI looks as good as it looks on figma).
    2. OnClickActive: Emits the value from child to parent where the actual state is updated.
    3. typeText modifies the input values recieved form the API into actual values taht neeeds to be displayed just like in figma.
    4. amountText: The same thing. Modifes the text to look the same as figma.
    5. isBgLight: Decides weather the background is dark or not and changes the header items color accordingly.
    6. A watcher function which updates teh state of the widget based on the chages made in the parent. Such as when a component is marked active the others are marked inactive.
    7. In request I am modifying the intial api data. The inital data has 2 active values I want to keep only one.

# How To Run

- To run the app simply clone the repo.
- Make sue you have nodejs installed.
- Run command 'npm i'.
- Then run commad 'npm run dev'.
- This will start the server and the application will be displayed on localhost:4200.

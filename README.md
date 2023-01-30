# Modal Component in React

A styled modal component using the styled-components library. The component contains various styles for the different components.

The animation for the ModalBody is created using keyframes and styles for each component can be customized by passing dynamic values through the "attrs" method.

## How to install the Modal

You can find the npm package [here](https://www.npmjs.com/package/modalagnes73).\
You can find the github repository [here](https://github.com/almoha73/modal-agnes-p14).

```jsx
npm install modalagnes73
```
```jsx
import React, { Component } from 'react'
import Modal from 'modalagnes73'

const Exemple = () => {

    const [isOpen, setIsOpen] = useState(false);

return(
    <>

    {isOpen && <Modal setIsOpen={setIsOpen} close/>}
    <button onClick={() => setIsOpen(true)}>Open</button>

    </>
)
}
```

## Properties

What props can you add ?

`setIsOpen`: function to close the modal.\
`modalTitle`: title displayed in the ModalContent (default: "Employee created").\
`modalText`: text displayed in the ModalContent (default: "If you want, you can create more!").\
`close`: whether to display the close icon in the alert component (default close color: "green-300").\
`closecolor`: color of the close icon in the alert component.\
`sizeclose`: size of the close icon (default: "header4").\
`check`: display of the check icon in the Modal component.\
`checkcolor`: color of the check mark.\
`sizecheck`: size of the check mark (default: "iconLarge").\
`animationBody`: enables the animation on the ModalBody.\
`button`: display of a button in the Modal component (default button text: "Close", default button background color: "green-300", default button text color: "neutral-1000").\
`buttonbg`: background color of the ModalButton.\
`buttonText`: text of the button.\
`buttonTextColor`: text color of the ModalButton.\
`buttonbgHover`: background color of the ModalButton when hovered (default: "green-200").\
`bodyColor`: background color of the modal (default: "neutral-100").\
`overlayColor`: background color of the overlay (default: "neutral-500").

## How to change the colours ?

You have access to a large colour palette that you can write as in Tailwind Css.

The range goes from 50, 100, 200, ... up to 900 except for neutral

Les colours are:

- neutral: neutral-000 is white, neutral 1000 is black
- green
- red
- blue
- yellow
  ... and others soon !!!

For example, if you want to change the colour of the close icon, you would add the props close to display the button and closecolor to change the color like this:

```jsx
<Modal close closecolor="red-500" />
```

## You can change the icons size

You have access to a different sizes that you can write.

Here are the size:

- `iconLarge`: 3rem,
- `iconBase`: 2rem,
- `header1`: 1.8rem,
- `header2`: 1.6rem,
- `header3`: 1.4rem,
- `header4`: 1.2rem,
- `header5`: 1.1rem,
- `paragraph`: 1rem,
- `helperText`: 0.8rem,
- `copyrightText`: 0.7rem,

For example, if you want to change the size of the close icon, you would add the props close to display the icon and sizeclose to change the size.

```jsx
<Modal close sizeclose="header3" />
```

# Pay attention to upper and lower case when writing the props !!!
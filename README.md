# React Utilities Hooks
Miscellaneous utilities for building JS SPAs

## Installation
`$ npm install react-utilities-hooks`

This library currently provides the following two custom hooks:
- `useDebounce`
- `useWindowResized`

## How to use?
### useDebounce();
Delays invoking the callback until after some time has passed since the last dependency value changes.
 - `@param` dependencies, Array of dependencies that restart the timer when their value changes
 - `@param` callback, Function to call when the delay expires
 - `@param` delay, Miliseconds to wait until the callback is called.
 
 **Example**
 ```
 import { useDebounce } from "react-resize-window";
 const [currentFilter, setCurrentFilter] = useState();
 const [tempFilter, setTempFilter] = useState();
 useDebounce([setTempFilter], () => {
   setCurrentFilter(tempFilter);
  });
 
 // on input...
 setTempFilter(newValue);
 ```

 ### useWindowResized()
 Returns client window size height & width after resizing the window.
 - `@param` delay = 350, It is optional that is used for debouncing rate in window resizing.

 ```
 import { useWindowResized } from "react-resize-window";
 const {height, width} = useWindowResized(1000);
 useEffect(() => {
    console.log("height, width: ", height, width);
 }, [height, width]);
 ```

import { useEffect, useState } from "react";

/**
 * Delays invoking the callback until after some time has passed since the last dependency value changes.
 * 
 * @param dependencies Array of dependencies that restart the timer when their value changes
 * @param callback Function to call when the delay expires
 * @param delay Miliseconds to wait until the callback is called.
 * 
 * @example
 * const [currentFilter, setCurrentFilter] = useState();
 * const [tempFilter, setTempFilter] = useState();
 * 
 * useDebounce([setTempFilter], () => {
 *  setCurrentFilter(tempFilter);
 * });
 * 
 * // on input...
 * setTempFilter(newValue);
 */
export function useDebounce(dependencies: unknown[], callback: () => void, delay = 350) {
    useEffect(() => {
        const id = setTimeout(callback, delay);

        return () => {
            clearTimeout(id);
        };
    }, [delay, callback, ...dependencies]);
}

export function useWindowResized(delay = 350) {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    const [tempWidth, setTempWidth] = useState<number>();
    const [tempHeight, setTempHeight] = useState<number>();

    useEffect(() => {
        const listner = () => {
            const rootElement = document.compatMode === "BackCompat" ? document.body : document.documentElement;
            setTempWidth(rootElement.clientWidth);
            setTempHeight(rootElement.clientHeight);
        };

        window.addEventListener("resize", listner);

        return () => {
            window.removeEventListener("resize", listner);
        };
    }, []);

    useDebounce([tempWidth, tempHeight], () => {
        setWidth(tempWidth);
        setHeight(tempHeight);
    }, delay);

    return { width, height };
}
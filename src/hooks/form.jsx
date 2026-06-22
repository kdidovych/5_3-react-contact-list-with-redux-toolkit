import {useState} from "react";

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        setValue(event.currentTarget.value);
    }
    const doClean = () => {
        setValue('');
    }
    return {
        value,
        onChange,
        setValue,
        doClean
    }
}
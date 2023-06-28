export const decrease = () => {
    return {
        type: "DECREASE" 
    }
}
export const increase = () => {
    return {
        type: "INCREASE"
    }
}

export const changeByValue = (value) => {
    return {
        type: "CHANGE",
        payload: value,
    }
}

export const add = (text) => {
    return {
        type: "ADD",
        payload: text,
    }
}

export const toggle = (id) => {
    return {
        type: "TOGGLE", 
        payload: id,
    }
}

export const remove = (id) => {
    return {
        type: "REMOVE",
        payload: id,
    }
}
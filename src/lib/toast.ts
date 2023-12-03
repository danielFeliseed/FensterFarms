import { writable } from 'svelte/store';



export type Toast = {
    show?: boolean;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "none" | "sticky" | undefined; 
    message?: string, 
    color?: "blue" | "red" | "green";
    duration: number;
    type?: "success" | "error" | "info";
};

export interface Toastable<T>  {
    subscribe: (callback: any) => void;
    set: (data: T) => void;
    update: (data: T) => void;
    show: (message: string, type?: "success" | "error" | "info", color?: 'green' | 'red' | 'blue', duration?: number, position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'none' | undefined) => void;
    hide: (message?: string | undefined, color?: 'green' | 'red' | 'blue', duration?: number, position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'none' | undefined ) => void;
}



export const toastable = ():Toastable<Toast> => {

    const { subscribe, set, update } = writable({show: false, type: "success", position: 'top-right', message: '', color: 'green', duration: 5000});

    return {
        show: (message: string, type:"success" | "error" | "info", color: 'green' | 'red' | 'blue' = 'green', duration: number = 5000, position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'none' | undefined = 'top-right') => {
            switch(type) {
                case "success":
                    color = "green";
                    break;
                case "error":
                    color = "red";
                    break;
                case "info":
                    color = "blue";
                    break;
            }
            set({show: true, type, message, color, duration, position});
        },
        hide: (message?: string | undefined, color: 'green' | 'red' | 'blue' = 'green', duration: number = 5000, position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'none' | undefined = 'top-right') => {
            set({show: false, message, color, duration, position});
        },
        subscribe: (callback: any) => {
            return subscribe(callback);
        },
        set: (value: any) => {
            set(value);
        },
        update: (updater: any) => {
            update((value: any) => {
                const newValue = updater(value);
                set(newValue);
                return newValue;
            });
        },
    };
}

export const toast = toastable();
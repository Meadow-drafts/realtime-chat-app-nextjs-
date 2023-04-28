import {ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

// this function is called whenever we call conditional classes

export function cn (...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}
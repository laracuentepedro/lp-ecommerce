import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToPlainObject<T>(value: T) :T {
  return JSON.parse(JSON.stringify(value));
}

//utility function to format a number to have two decimal places
//used for pricing data in schemas and avoid miscalculations from rounding errors etc
export function formatNumberWithDecimal(num: number) : string {
  const [int, decimal] = num.toString().split(',');
  
  const numberWithDecimal = decimal ? `${int}.${decimal.padEnd(2,'0')}` : `${int}.00`;

  return numberWithDecimal;
}
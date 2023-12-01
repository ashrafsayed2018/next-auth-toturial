// this line of code should protect routes on entire application
export {default} from "next-auth/middleware"

// here the code to matching routes that should be protected

export const config = {matcher:["/extra","/dashboard"]}
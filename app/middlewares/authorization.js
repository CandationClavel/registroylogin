import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { usuarios } from "../controllers/authentication.controller.js";

dotenv.config();

function soloAdmin(req,res,next){
    const logueado = revisarCookie(req);
    if(logueado) return next();
    return res.redirect("/")
}

function soloPublico(req,res,next){
    const logueado = revisarCookie(req);
    if(!logueado) return next();
    //return res.redirect("/admin")
    return res.redirect("/welcome")
}

function revisarCookie(req){
    //Obtener cookie
    try{
        const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
        const decoded = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
        //console.log(decoded)
        const usuarioARevisar = usuarios.find(usuario => usuario.user === decoded.user);
        if(!usuarioARevisar){
            return false
        }
        return true;
    } catch {
        return false;
    }
    
}

export const methods = {
    soloAdmin,
    soloPublico
}
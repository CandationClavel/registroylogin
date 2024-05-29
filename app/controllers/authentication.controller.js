import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

//Acceder a las variables de entorno
dotenv.config();

//temporal para usuarios. Simula BD o algo así
export const usuarios = [{
    user: "test",
    emal: "test@algo.com",
    //Contraseña ejemplo: a
    password: "$2a$05$I9PSLrHNZsJFezZf/fU4AeUk.DePEPXyaiF6yHqyJ7iE/TGMt/.7y"
}]

async function login(req,res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    if(!user || !password){
        return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
    }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
//Para usar en BD
    //const user = await User.findOne({ where: { username } });
    if(!usuarioARevisar){
        return res.status(400).send({status:"Error",message:"Error durante el login"})
    }
    const loginCorrecto = await bcryptjs.compare(password,usuarioARevisar.password);
    //console.log(loginCorrecto)    //Verificar si contraseña es correcta
    if(!loginCorrecto){
        return res.status(400).send({status:"Error",message:"Error durante el login"})
    }
    //Si login correcto, generar token
    const token = jsonwebtoken.sign({user:usuarioARevisar.user},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRATION});

        //Cooki
        const cookieOption = {
            //Expira en un día
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            path: "/"
        }
        res.cookie("jwt",token,cookieOption);
        res.send({status:"ok",message:"Usuario loggeado",redirect:"/welcome"})
}

async function register(req,res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    if(!user || !password || !email){
        return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
    }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
    if(usuarioARevisar){
        return res.status(400).send({status:"Error",message:"Este usuario ya existe"})
    }
    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password,salt);
    const nuevoUsuario = {
        user, email, password: hashPassword
    }
//Para usar en BD
    /*
      try {
    await User.create({ username, email, password: hashedPassword });
    res.send({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
     */
    usuarios.push(nuevoUsuario);    //Agregar a BD
    console.log(usuarios);
    return res.status(201).send({status:"ok",message: `Usuario ${nuevoUsuario.user} agregado`,redirect:"/"})
}

export const methods = {
    login,
    register
}
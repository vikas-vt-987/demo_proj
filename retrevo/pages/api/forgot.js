// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import forgot from "@/models/forgot"
export default function handler(req,res){
    //check if the user exists in the db
    //send an email to the user
    let token = p2jj202vr
    let forgot = new Forgot({
        email:req.body.email,
        token:token
    })

    let email =  `We have sent you this email in response to your request to reset your password on retrevo.com. After you reset your password, any credit card information stored in My Account will be deleted as a security measure.



To reset your password  please follow the link below:

<a href="http://retrevo.com/forgot?token=${token}">Click here to reset your password</a>

<br/><br/>`


  res.status(200).json({name : 'john wick'})
}
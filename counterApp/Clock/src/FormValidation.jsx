import {z} from "zod";

const formSchema=z.object(
    {
        username:z.string().min(3,"minimum length should be 3 digits").max(100,"Maximum length shoulde be 100"),
        password:z.string().min(8,"password should be more than 8 digit").max(100,"Maximum length shoulde be 100"),
        confirm:z.string()
    }
).refine((data)=>data.password === data.confirm,{
    message:"password din't match",
    path:["confirm"],//path of error
});

export default formSchema;
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useGetStudentDetailsByIdQuery, useLazyGetAllStudentsQuery, useLazyGetStudentDetailsByIdQuery } from "../../services/studentsApi";
import { useUpdateStudentMutation } from "../../services/studentsApi";

 function UpdateStudent(){
    const navigate = useNavigate();
    var {id}=useParams();
    var{isLoading,data}=useGetStudentDetailsByIdQuery(id);
    var[updateStudentFn]=useUpdateStudentMutation();
    var [getAllStudentsFn]=useLazyGetAllStudentsQuery();
    var[getStudentDeatailsFn]=useLazyGetStudentDetailsByIdQuery();

    var studentForm=useFormik({
            initialValues:{
              "name":"",
              "age":"",
              "gender":"",
              "course":"",
              "totalFee":"",
              "amountPaid":"",
              "due":"",
              "installmentsPaid":""
            },
            onSubmit:(values)=>{
                updateStudentFn(values).then(()=>{
                    alert("Student Updated")
                    getAllStudentsFn();
                    getStudentDeatailsFn();
                    navigate("/students");
                })
            },
        });
        useEffect(()=>{
            getStudentDeatailsFn(id).then(()=>{
                studentForm.setValues({...data})
            })
        },[data]);
        
      return (
        <div className="border border-3 p-3 m-3 border-dark">
            <h1>UpdateStudent</h1>
            {isLoading && <b>Loading....</b>}
            {!isLoading && 
            <form onSubmit={studentForm.handleSubmit}>
            <input type="text" {...studentForm.getFieldProps("name")}/><br/><br/>
            <input type="text" {...studentForm.getFieldProps("age")}/><br/><br/>
            <input type="text" {...studentForm.getFieldProps("gender")}/><br/><br/>
            <input type="text" {...studentForm.getFieldProps("course")}/><br/><br/>
            <input type="text" {...studentForm.getFieldProps("totalFee")}/><br/><br/>
            <input type="text" {...studentForm.getFieldProps("amountPaid")}/><br/><br/>
            <input type="text" {...studentForm.getFieldProps("due")}/><br/><br/>
            <input type="text" {...studentForm.getFieldProps("installmentsPaid")}/><br/><br/>
            <button className="btn btn-success" >Update Student</button>
          </form>
          }
        </div>
    );
}
export default UpdateStudent;
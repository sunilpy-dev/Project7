import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { IoCopySharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';//imported the toastify css
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")//here it is telling that on ech render check the local storage and if there is any passwords name key avaliable the tak it out
    let passwordArray;
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))//and if that is npt null then set it into the password array
    }
  }, [])

  const copyText = (text) => {
    toast('Copied to clipboard', {//applied that properrtiesa as of function here
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text)
  }


  const showPassword = () => {
    passwordref.current.type = 'text'
    console.log(ref.current.src)
    if (ref.current.src.includes("/eyecross.png")) {//here we are checking if the src includs this string then alter it othere wise not keep it same
      ref.current.src = "/eye.png"
      passwordref.current.type = 'password'
    }
    else {
      ref.current.src = "/eyecross.png"
      passwordref.current.type = 'text'

    }
  }

  const savePassword = () => {
    if( form.site.length>3 && form.username.length>3 && form.password.length>3 ){

      toast('Password saved!', {//applied that properrtiesa as of function here
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])//and here we are setting the password when the save buitton is clicked and setting the passwordArrya to the value in teh form of array
      //here we are aslo telling that now not directly save the form object but also add the id initi then save it
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))//and saving it into the local storage with the key password
      console.log([...passwordArray, form])//and simply just printing the value an dwe didn't use the passwordArray to print those value because the useeffect might sometime take the time to get update
      setform({ site: "", username: "", password: "" })
    }
    else{
      toast('Error:Password not saved!', {//applied that properrtiesa as of function here
        
      });
    }
  }
  const deletePassword = (id) => {
    toast('Password deleted!!', {//applied that properrtiesa as of function here
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log("Delteing password with id :", id)
    let c = confirm("Do you really want to Delete this password?")
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id !== id))//heree filter updates the password arry on click of the delte with the false to that particular id
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))//here we are not ue the [] jsut because this filter is already returning the arrya dn we are just updating it

    }
  }
  const editPassword = (id) => {
    console.log("Editing password with id :", id)


    setform(passwordArray.filter(i => i.id == id)[0])//this filter will return an arrya and we ahev to take only one element from it which will be a one form object
    setpasswordArray(passwordArray.filter(item => item.id !== id))
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })//here the ...form means spread it here 
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
      <div className=" p-2 md:mycontainer md:px-20 ">
        <h1 className='text-4xl font-bold text-center'>
          <span className='text-green-500'>&lt;</span>
          <span>Pss</span>
          <span className='text-green-500'>OP/ &gt;</span>
        </h1 >
        <p className='text-green-900 text-lg text-center'>Your Own Password Manager</p>
        <div className=' flex flex-col p-4 text-black gap-8 items-center'>
          <input value={form.site} onChange={handleChange} placeholder='Enter website Url' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" name='site' id='site' />
          <div className="flex md:flex-row flex-col w-full justify-between gap-8 ">
            <input value={form.username} onChange={handleChange} placeholder='Entre Username' className='rounded-full border border-green-500 w-full px-4 py-1' type="text" name='username' id='username' />
            <div className="relative">
              <input ref={passwordref} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full px-4 py-1' type="password" name='password' id='password' />
              <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                <img ref={ref} className='p-1' width={26} src="/eye.png" alt="eye" />{/*here e are telling that take this img provide a ref and we are gonna use this ref */}
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center items-center bg-green-400 rounded-full px-8 py-2 w-fit hover:bg-green-300 gap-2 border border-green-900'>
            {/*icons mus be placed on the respective place and if possible remove the script and adds the > before that */}
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover">

            </lord-icon>
            Save
          </button>
        </div>
        <div className="passwords">
          <h2 className='font-bold py-4 text-2xl'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}{/*here we are saying that if the passwordsarrya are of lenght 0 then show this other wise below table */}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">{/*to see the border radius on the table first we need to amkre the overflow hidden */}
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Passwords</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {

                return <tr key={index}>{/*obviously without key it won,t be wpork */}
                  <td className=' py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <a href={item.site} target="_blank">{item.site}</a>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>{/*so here we have to give that function in the arroew function for proper working */}
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span>{item.username}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span>{item.password}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center'>
                    <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </span>
                    <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{ "width": "25px", "height": "25px" }}>
                      </lord-icon>
                    </span>
                  </td>
                </tr>
              })}

            </tbody>
          </table>}
        </div>
      </div >
    </>
  )
}

export default Manager
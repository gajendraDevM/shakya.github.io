import  { useState } from 'react'
import storage from './firebase'
import Upload from 'rc-upload'
import {GrAttachment} from 'react-icons/gr'
export default function fileUpload({onSuccess}:any) {

    // const [imgurl, setImgurl] = useState<any>()
    // const [loading1, setLoading1] = useState(false)
    const [file_name, setFileName] = useState()



    const customRequest = async (options: any) => {
        const { file } = options;
        setFileName(file.name)
        storage
        .ref("images/" + file.name)
        .put(file.originFileObj)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(url => {
          console.log(url);

          onSuccess(url)

          // setLoading1(false)
    
        })
        .catch(error => {
          console.log(error);
        });
    };



      




  return (
    <div>

<Upload required customRequest={customRequest}>
                <button className="file-input file-input-bordered file-input-warning w-full max-w-xs" >
                     {file_name? <div className='flex items-center justify-center gap-x-4 '><GrAttachment className="text-xl text-gray-100"/> 
                     {file_name}</div>  : 'Upload'} </button>
            </Upload> 
            
               </div>
  )
}

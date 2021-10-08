import Pic from './pic1.jpg';
import Pic2 from './pic2.jpg';
import Pic3 from './pic3.jpg';
import Pic4 from './pic4.jpg';
import Pic5 from './pic5.jpg';
import Pic6 from './pic6.jpg';


import FbImageLibrary from 'react-fb-image-grid'




function PostImage(){
    return(
        <FbImageLibrary images={[Pic,Pic2,Pic3,Pic4,Pic5,Pic6]}/>

    )
}
export default PostImage;
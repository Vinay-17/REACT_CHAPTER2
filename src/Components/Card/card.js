import {ButtonComponent} from "../ButtonComponent/button.js"
import { ImageComponent } from "../ImageComponent/image.js";
import { HeadingComponent1,
         HeadingComponent2,
         HeadingComponent3,
         HeadingComponent4,
         HeadingComponent5,
         HeadingComponent6,
          } from "../Headings/heading.js";
import { ListParent } from "../ListComponent/list.js";          
export  const CardComponent = () => {
    return (
        <div>
      <h1>CARD COMPONENT</h1>
      <ButtonComponent />
      <h1>vinay</h1>
      <ImageComponent />
      <HeadingComponent1 />
      <HeadingComponent2 />
      <HeadingComponent3 />
      <HeadingComponent4 />
      <HeadingComponent5 />
      <HeadingComponent6 />
      <ListParent />
        </div>
    );
}
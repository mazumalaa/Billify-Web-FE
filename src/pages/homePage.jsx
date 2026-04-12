// Imports
import { RiAddBoxLine, RiBookLine, RiBox1Line, RiCalculatorLine, RiEqualLine, RiUserAddLine } from "react-icons/ri";
import CustomSection from "../components/customSection";
import { FiEdit2, FiUsers } from "react-icons/fi";
import CustomInput from "../components/customInput";
import { useState } from "react";

// My-Setup
const HomePage = () => {
    const [input,setInput] = useState({
        friendsName:"",
        title:"",
    })

    const handleChange = (key,value) => {
        setInput(prev=> ({...prev, [key]:value}));
    }

    return (
        <>
            <CustomSection title={`Add Friend.`} Icon={RiUserAddLine}>
                <CustomInput onChange={(e)=> handleChange("friendsName" , e.target.value)} value={input.friendsName} label={`Friend's Name`} Icon={FiEdit2} />
            </CustomSection>

            <CustomSection title={`Add Title.`} Icon={RiBookLine}>
                 <CustomInput onChange={(e)=> handleChange("title" , e.target.value)} value={input.title} label={`Title`} Icon={FiEdit2} />
            </CustomSection>

            <CustomSection title={`List Friends.`} Icon={FiUsers}></CustomSection>

            <CustomSection title={`Add Product.`} Icon={RiAddBoxLine}></CustomSection>

            <CustomSection title={`List Product.`} Icon={RiBox1Line}></CustomSection>

            <CustomSection title={`Calculate.`} Icon={RiCalculatorLine}></CustomSection>

            <CustomSection title={`Result.`} Icon={RiEqualLine}></CustomSection>
        </>
    )
}

// Export
export default HomePage;
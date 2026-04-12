// Imports
import { RiAddBoxLine, RiBookLine, RiBox1Line, RiCalculatorLine, RiCoinLine, RiEqualLine, RiUserAddLine } from "react-icons/ri";
import CustomSection from "../components/customSection";
import { FiBook, FiEdit2, FiUsers } from "react-icons/fi";
import CustomInput from "../components/customInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

// My-Setup
const HomePage = () => {
    const [input, setInput] = useState({
        friendsName: "",
        title: "",
        tax:"",
    })

    const handleChange = (key, value) => {
        setInput(prev => ({ ...prev, [key]: value }));
    }

    return (
        <>
            <CustomSection title={`Add Friend.`} Icon={RiUserAddLine}>
                <div className={`flex gap-2 items-center`}>
                    <CustomInput onChange={(e) => handleChange("friendsName", e.target.value)} value={input.friendsName} label={`Friend's Name`} Icon={RiUserAddLine} />

                    <CustomButton customStyle={`w-max`}>
                        <span>Add</span>
                        <RiUserAddLine />
                    </CustomButton>
                </div>
            </CustomSection>

            <CustomSection title={`Add Title.`} Icon={RiBookLine}>
                <div className={`flex gap-2 items-center`}>
                    <CustomInput onChange={(e) => handleChange("title", e.target.value)} value={input.title} label={`Title`} Icon={FiBook} />

                    <CustomButton customStyle={`w-max`}>
                        <span>Add</span>
                        <RiBookLine />
                    </CustomButton>
                </div>
            </CustomSection>

            <CustomSection title={`Add Tax.`} Icon={RiCoinLine}>
                <div className={`flex gap-2 items-center`}>
                    <CustomInput type={`number`} onChange={(e) => handleChange("tax", e.target.value)} value={input.tax} label={`Tax`} Icon={FiBook} />

                    <CustomButton customStyle={`w-max`}>
                        <span>Add</span>
                        <RiCoinLine />
                    </CustomButton>
                </div>
            </CustomSection>

            <CustomSection title={`List Friends.`} Icon={FiUsers}></CustomSection>

            <CustomSection title={`Add Product.`} Icon={RiAddBoxLine}></CustomSection>

            <CustomSection title={`List Product.`} Icon={RiBox1Line}></CustomSection>

            <CustomSection title={`Calculate.`} Icon={RiCalculatorLine}></CustomSection>
        </>
    )
}

// Export
export default HomePage;
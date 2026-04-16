// Imports
import { RiAddBoxLine, RiBookLine, RiBox1Line, RiBox3Line, RiCalculatorLine, RiCoinLine, RiPriceTag2Line, RiUserAddLine } from "react-icons/ri";
import CustomSection from "../components/customSection";
import { FiBook, FiEdit2, FiUsers } from "react-icons/fi";
import CustomInput from "../components/customInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { HiDatabase, HiShoppingBag, HiUsers } from "react-icons/hi";
import { HiEquals } from "react-icons/hi2";

// My-Setup
const HomePage = () => {
    const [input, setInput] = useState({
        friendsName: "",
        title: "",
        tax: "",
    })

    const handleChange = (key, value) => {
        setInput(prev => ({ ...prev, [key]: value }));
    }

    return (
        <div className={`columns-1 md:columns-2`}>
            <CustomSection title={`Add Friend.`} Icon={RiUserAddLine}>
                <div className={`flex gap-2 items-center flex-col lg:flex-row`}>
                    <CustomInput onChange={(e) => handleChange("friendsName", e.target.value)} value={input.friendsName} label={`Friend's Name`} Icon={RiUserAddLine} />

                    <CustomButton customStyle={`w-full lg:w-max`}>
                        <span>Add</span>
                        <RiUserAddLine />
                    </CustomButton>
                </div>
            </CustomSection>

            <CustomSection title={`Add Title.`} Icon={RiBookLine}>
                <div className={`flex gap-2 items-center flex-col lg:flex-row`}>
                    <CustomInput onChange={(e) => handleChange("title", e.target.value)} value={input.title} label={`Title`} Icon={FiBook} />

                    <CustomButton customStyle={`w-full lg:w-max`}>
                        <span>Add</span>
                        <RiBookLine />
                    </CustomButton>
                </div>
            </CustomSection>

            <CustomSection title={`Add Tax.`} Icon={RiCoinLine}>
                <div className={`flex gap-2 items-center flex-col lg:flex-row`}>
                    <CustomInput type={`number`} onChange={(e) => handleChange("tax", e.target.value)} value={input.tax} label={`Tax`} Icon={RiCoinLine} />

                    <CustomButton customStyle={`w-full lg:w-max`}>
                        <span>Add</span>
                        <RiCoinLine />
                    </CustomButton>
                </div>
            </CustomSection>

            <CustomSection title={`List Friends.`} Icon={FiUsers}>
                <div className="p-5">
                    <HiUsers className={`text-7xl text-indigo-400 mx-auto`} />

                    <div>
                        <h3 className={`text-gray-700 font font-medium text-center text-base md:text-lg lg:text-xl capitalize`}>the data is still empty</h3>
                        <p className={`text-sm md:text-lg text-center text-gray-400`}>Add friends to display your friends list.</p>
                    </div>
                </div>
            </CustomSection>

            <CustomSection title={`Add Product.`} Icon={RiBox1Line}>
                <div>
                    <CustomInput onChange={(e) => handleChange("productName", e.target.value)} value={input.tax} label={`Product Name`} Icon={FiEdit2} />
                    <CustomInput type={`number`} onChange={(e) => handleChange("productPrice", e.target.value)} value={input.tax} label={`Product Price`} Icon={RiPriceTag2Line} />
                         <CustomButton customStyle={``}>
                        <span>Add</span>
                        <RiBox3Line />
                    </CustomButton>
                </div>
            </CustomSection>

            <CustomSection title={`Product List`} Icon={RiAddBoxLine}>
                <div className="p-5">
                    <HiShoppingBag className={`text-7xl text-indigo-400 mx-auto`} />

                    <div>
                        <h3 className={`text-gray-700 font font-medium text-center text-base md:text-lg lg:text-xl capitalize`}>the data is still empty</h3>
                        <p className={`text-sm md:text-lg text-center text-gray-400`}>Add products to display your products list.</p>
                    </div>
                </div>
            </CustomSection>

            <CustomSection title={`Calculate.`} Icon={RiCalculatorLine}>
                <div className="p-5">
                    <HiDatabase className={`text-7xl text-indigo-400 mx-auto`} />

                    <div>
                        <h3 className={`text-gray-700 font font-medium text-center text-base md:text-lg lg:text-xl capitalize`}>tthe data is incomplete</h3>
                        <p className={`text-sm md:text-lg text-center text-gray-400`}>Complete all the data needed to perform the calculation.</p>
                    </div>
                </div>
            </CustomSection>

            <CustomSection title={`Result.`} Icon={HiEquals}>
                <div className="p-5">
                    <HiEquals className={`text-7xl text-indigo-400 mx-auto`} />

                    <div>
                        <h3 className={`text-gray-700 font font-medium text-center text-base md:text-lg lg:text-xl capitalize`}>tthe data is incomplete</h3>
                        <p className={`text-sm md:text-lg text-center text-gray-400`}>Complete all the data and do the calculations to see the results.</p>
                    </div>
                </div>
            </CustomSection>
        </div>
    )
}

// Export
export default HomePage;
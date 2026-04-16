// Imports
import { FiClock, FiInfo, FiSearch } from "react-icons/fi";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/customInput";
import CustomSection from "../components/customSection";


// My-Setup
const HistoryPage = () => {
    return (
        <>
            <CustomSection Icon={FiClock} title={`Histories`}>
                <div className={`flex flex-col md:flex-row gap-2 items-center mb-3`}>
                    <CustomInput customStyle={`mb-0! mt-3!`} label={`Search`} />
                    <CustomButton customStyle={`w-full md:max-w-max`}>
                        <span>Search</span>
                        <FiSearch />
                    </CustomButton>
                </div>

                <div className="text-center border-2 border-dashed rounded-md border-gray-300 text-gray-500 p-3">
                    <FiInfo className="mx-auto text-4xl" />
                    <h1 className={`font-medium text-lg md:text-xl mb-3`}>Data is still empty</h1>
                    <p className="text-gray-400 text-sm md:text-base">You have not made any transactions at this time.</p>
                </div>
            </CustomSection>
        </>
    )
}

// Export
export default HistoryPage;
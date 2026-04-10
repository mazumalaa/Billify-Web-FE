// Imports
import { RiAddBoxLine, RiBookLine, RiBox1Line, RiCalculatorLine, RiEqualLine, RiUserAddLine} from "react-icons/ri";
import CustomSection from "../components/customSection";
import { FiUsers } from "react-icons/fi";

// My-Setup
const HomePage = () => {
    return (
        <>
            <CustomSection title={`Add Friend.`} Icon={RiUserAddLine}></CustomSection>
            <CustomSection title={`Add Title.`} Icon={RiBookLine}></CustomSection>
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
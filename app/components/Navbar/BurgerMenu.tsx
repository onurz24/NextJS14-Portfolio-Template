// Burger.tsx
'use client'
import { useSelector, useDispatch } from "react-redux";
import "../.././assets/styles/components/Navbar/BurgerMenu.scss";
import { RootState } from "@/store/store";
import { Toggle } from "@/store/BurgerSlice";

export const BurgerMenu = () => {
const IsOpen = useSelector((state: RootState) => state.IsOpen);
const dispatch = useDispatch();

return (
    <div
    onClick={() => {dispatch(Toggle());}}
    className={`BurgerMenu ${IsOpen ? "clicked" : ""}`}
    >
        <span></span>
    </div>

);};
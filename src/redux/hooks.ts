import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

//redux usa questo hook per spedire le informazioni
//forzo la tipizzazione del valore di ritorno di useDispatch
export const ueAppDispatch: () => AppDispatch = useDispatch;

//creiamo un alias; useAppSelector è uguale a useSelector e anche qui faccio un override
//un selettore è lo strumento che utilizzo per andare a estrarre i dati dallo store, selezionando i vari dati che ci interessano
//questo override è importante perchè il selettore di default non conosce il tipo dello state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

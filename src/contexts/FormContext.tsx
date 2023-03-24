// Context, Reducer, Provider, Hook

import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  email: string
};

type Action = {
  type: FormActions;
  payload: any;
};


type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};


type FormProviderProps = {
  children: ReactNode
};


const initialData: State = {
  currentStep: 0,
  name: '',
  email: '',
}

//context
const FormContext = createContext<ContextType | undefined>(undefined);

//reducer
export enum FormActions {
  setCurrentStep, //passo atual
  setName, //pedir nome
  setEmail, //pedir email
}
const formReducer = (state: State, action: Action) => {
  //recebo os dados no state
  switch (action.type) {
    case FormActions.setCurrentStep: //executo a ação de trocar passo
      return { ...state, currentStep: action.payload }; //pego o passo atual com o payload, atualizo com currenStep e retorno o state com currentstep modificado
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };

    default:
      return state;
  }
};

//Provider
export const FormProvider = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}


//context hook

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do formprovider');
  }
  return context;
}







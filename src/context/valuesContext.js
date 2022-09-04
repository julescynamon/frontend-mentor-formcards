import { createContext } from 'react';

const valuesContext = createContext({
        name: "Jane Appleseed",
        number: "0000 0000 0000 0000",
        month: "00",
        year: "00",
        cvc: "000"
});

export default valuesContext;
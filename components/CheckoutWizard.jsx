import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap">
      {['User Login', 'Dirección de Envío', 'Método de Pago', 'Realizar Pedido'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2 
          text-center 
       ${
         index <= activeStep
           ? 'border-lime-500 text-lime-500'
           : 'border-gray-400 text-gray-400'
       }
          
       `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}

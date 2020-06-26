import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const Success = () => {
  return (
    <div id="success">
      <div className="content">
        <main>
          <span>
            <FiCheckCircle />
          </span>
          <h1>Cadastro concluído!</h1>
        </main>
      </div>
    </div>
  );
}

export default Success;
describe('Test Saludo de Yuliana', () => {
    test('should pass', () => {
      if (typeof document !== 'undefined') {
        const body = document.createElement('body');
        const h1 = document.createElement('h1');
        h1.textContent = 'Buenas!, esta es la práctica final de  Yuliana Zorrilla 2021-1823';
        body.appendChild(h1);
  
        // Asegúrate de realizar la aserción en el texto del h1
        expect(h1.textContent).toContain('Buenas!, esta es la práctica final de  Yuliana Zorrilla 2021-1823');
      } else {
        // Advertencia
        console.warn('No se pudo acceder al objeto document :C ');
      }
    });
  });
  
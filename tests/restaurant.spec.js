const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(typeof createMenu).toBe('function');

    const menuObject = createMenu({ food: { coxinha: 2.00, sashimi: 4.00, sopa: 2.50}, drink: { agua: 1.50 } });
    expect(typeof menuObject).toBe('object');
    
    expect(menuObject).toMatchObject({ fetchMenu: expect.any(Function)});
    expect(typeof menuObject.fetchMenu).toBe('function');
    expect(menuObject.fetchMenu()).toEqual({ food: { coxinha: 2.00, sashimi: 4.00, sopa: 2.50}, drink: { agua: 1.50 } });
    
    const newMenuObject = createMenu({ food: { coxinha: 1 }, drink: { fruki: 2 } });
    expect(newMenuObject.fetchMenu()).toEqual({ food: { coxinha: 1 }, drink: { fruki: 2 } });

    const comsumption = [];
    expect(menuObject.comsumption).toEqual(comsumption);

    menuObject.order('coxinha');
    expect(menuObject.comsumption).toEqual(['coxinha']);
    
    menuObject.order("agua");
    menuObject.order("sopa");
    menuObject.order("sashimi");
    
    expect(menuObject.comsumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);

    menuObject.order('coxinha');

    expect(menuObject.comsumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi', 'coxinha']);
    
    const paymentValue = menuObject.pay();
    expect(paymentValue).toBe('R$ 13.20');
  });
});

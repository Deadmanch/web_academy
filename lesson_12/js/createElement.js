function createElement(root,targetElement) {
    const container = document.createElement('div');
    container.classList.add('container')

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('button_wrapper')
    
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Нажми сюда';

    const title = document.createElement('h2');
    title.classList.add('btn-title');
    title.textContent = 'Основы';

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('modal');

    const btnModalLevel = document.createElement('p');
    btnModalLevel.classList.add('modal__level');
    btnModalLevel.textContent = 'Уровень 3/5';

    const btnModalLesson = document.createElement('p');
    btnModalLesson.classList.add('modal__lesson');
    btnModalLesson.textContent = 'Урок 1 из 3';

    const buttonTheory = document.createElement('button');
    buttonTheory.classList.add('modal-btn__theory');
    buttonTheory.textContent = 'Теория';

    const buttonStart = document.createElement('button');
    buttonStart.classList.add('modal-btn__start');
    buttonStart.textContent = 'Старт';
    
    btnContainer.append(btnModalLevel);
    btnContainer.append(btnModalLesson);
    btnContainer.append(buttonTheory);
    btnContainer.append(buttonStart);
    btnWrapper.append(button);
    btnWrapper.append(title);
    btnWrapper.append(btnContainer);
    container.append(btnWrapper);
    root.append(container);
    button.addEventListener('click', () => {
        btnContainer.classList.toggle('modal-active')
    })
}



export {createElement}
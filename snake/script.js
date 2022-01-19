const GAME_STATUS_STARTED = 'started';
const GAME_STATUS_PAUSED  = 'paused';
const GAME_STATUS_STOPPED = 'stopped';

const SNAKE_DIRECTION_UP = 'up';
const SNAKE_DIRECTION_DOWN = 'down';
const SNAKE_DIRECTION_LEFT = 'left';
const SNAKE_DIRECTION_RIGHT = 'right';


const config = {
    size: 20
};

const game = {

    getElement() {
        return document.getElementById('game');
    },

    start() {
        this.setGameStatus(GAME_STATUS_STARTED);
        if(!snake.paused){
            food.count = 0;
            document.getElementById('score-value').innerHTML = food.count;
            board.render();
            snake.parts.length = 0;
            snake.direction = SNAKE_DIRECTION_DOWN;
            snake.generatePos();
            snake.render();
            food.items.length = 0;
            for(let i = 0; i < 3; i++)
                food.generateItem();
            food.render();
        }
        snake.paused = false;
    },

    pause() {
        this.setGameStatus(GAME_STATUS_PAUSED);
        console.log('Pause');
        snake.paused = true;
    },

    stop() {
        this.setGameStatus(GAME_STATUS_STOPPED);
        console.log('Stoooop');
        board.stop();
    },

    move(event) {
        let direction = null;
        
        switch (event.code) {
            case "ArrowUp":
                direction = SNAKE_DIRECTION_UP;
                break;
            case "ArrowDown":
                direction = SNAKE_DIRECTION_DOWN;
                break;
            case "ArrowLeft":
                direction = SNAKE_DIRECTION_LEFT;
                break;
            case "ArrowRight":
                direction = SNAKE_DIRECTION_RIGHT;
                break;
            default:
                return;
        }

        /* устанавливаем позицию для змейки
         * и запрашиваем координаты следующей позиции */
        if(!snake.paused){
            snake.setDirection(direction);
            // let timerId = setTimeout (function motion(){
            //     const nextPosition = snake.getNextPosition();
            //     if(!nextPosition){
            //         return;
            //     }
            //     /* проверяем совпадает ли следующая позиция с какой-нибудь едой */
            //     const foundFood = food.foundPosition(nextPosition);
            //     /* если найден индекс еды (то есть позиция совпадает) */
            //     if (foundFood !== -1) {
            //         /* устанавливаем следующую позицию змейки с вторым параметром "не удалять хвост змейки",
            //         * змейка съев еду вырастает на одну клетку */
            //         snake.setPosition(nextPosition, false);
            //         /* удаляем еду с поля */
            //         food.removeItem(foundFood);
            //         /* генерируем новую еду на поле */
            //         food.generateItem();
            //         /* перерендериваем еду */
            //         food.render();
            //     } else {
            //         /* если индекс не найден, то просто устанавливаем новую координату для змейки */
            //         snake.setPosition(nextPosition);
            //     }
            //     /* перерендериваем змейку */
            //     snake.render();
            //     clearTimeout(timerId);
            //     timerId = setTimeout(motion, 2000);
            // }, 2000);
           
            const nextPosition = snake.getNextPosition();
            if(!nextPosition){
                return;
            }
            /* проверяем совпадает ли следующая позиция с какой-нибудь едой */
            const foundFood = food.foundPosition(nextPosition);
            /* если найден индекс еды (то есть позиция совпадает) */
            if (foundFood !== -1) {
                /* устанавливаем следующую позицию змейки с вторым параметром "не удалять хвост змейки",
                * змейка съев еду вырастает на одну клетку */
                snake.setPosition(nextPosition, false);
                /* удаляем еду с поля */
                food.removeItem(foundFood);
                /* генерируем новую еду на поле */
                food.generateItem();
                /* перерендериваем еду */
                food.render();
            } else {
                /* если индекс не найден, то просто устанавливаем новую координату для змейки */
                snake.setPosition(nextPosition);
            }
            /* перерендериваем змейку */
            snake.render();           
        }
    },

    setGameStatus(status) {
        const element = game.getElement();
        // обратить внимание, как сделать красивее
        element.classList.remove(GAME_STATUS_STARTED, GAME_STATUS_PAUSED, GAME_STATUS_STOPPED);
        element.classList.add(status);
    }
};


const board = {

    getElement() {
        return document.getElementById('board');
    },

    /**
     * Функция отрисовывает поле с клетками для игры.
     */
    render() {
        const board = this.getElement();
        board.innerHTML = '';
        /* рисуем на странице 20*20 клеток */
        for (let i = 0; i < config.size**2; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            /* высчитываем и записываем в data атрибуты
             * координаты от верхней и левой границы */
            cell.dataset.top = Math.trunc(i / config.size);
            cell.dataset.left = i % config.size;

            board.appendChild(cell);
        }
    },

    stop() {
        const board = this.getElement();
        board.innerHTML ='<span id="stop-sign"> Game over!</span>';
    }
};

const cells = {

    getElements() {
        return document.getElementsByClassName('cell');
    },

    /**
     * Функция задает класс для клетки по заданным координатам.
     *
     * coordinates {Array.<{top: number, left: number}>} Массив координат клеток для изменения.
     * className {string} Название класса.
     */
    renderItems(coordinates, className) {
        const cells = this.getElements();

        /* для всех клеток на странице удаляем переданный класс */
        for (let cell of cells) {
            cell.classList.remove(className);
        }

        /* для заданных координат ищем клетку и добавляем класс */
        for (let coordinate of coordinates) {
            const cell = document.querySelector(`.cell[data-top="${coordinate.top}"][data-left="${coordinate.left}"]`);
            cell.classList.add(className);
        }
    }
};


const snake = {

    paused: false,
    direction: SNAKE_DIRECTION_DOWN,
    parts: [],

    generatePos() {
        const newPos = {
            top: getRandomNumber(0, config.size - 3),
            left: getRandomNumber(0, config.size - 3)
        };
        const newPos1 = {
            top: newPos.top + 1,
            left: newPos.left
        };
        const newPos2 = {
            top: newPos.top + 2,
            left: newPos.left
        };
        this.parts.push(newPos);
        this.parts.push(newPos1);
        this.parts.push(newPos2);
    },
        
    /**
     * Функция устанавливает направление движения.
     *
     *  direction {'up' | 'down' | 'left' | 'right'} Направление движения змейки.
     */
    setDirection(direction) {
        /* проверка не пытается ли пользователь пойти в противоположном направлении,
         * например, змейка ползет вправо, а пользователь нажал стрелку влево */
        /* обратить внимание, как сделать красивее и сократить условие */
        if (this.direction === SNAKE_DIRECTION_UP && direction === SNAKE_DIRECTION_DOWN
            || this.direction === SNAKE_DIRECTION_DOWN && direction === SNAKE_DIRECTION_UP
            || this.direction === SNAKE_DIRECTION_LEFT && direction === SNAKE_DIRECTION_RIGHT
            || this.direction === SNAKE_DIRECTION_RIGHT && direction === SNAKE_DIRECTION_LEFT) {
            return;
        }
        this.direction = direction;
    },

    /**
     * Функция считает следующую позицию головы змейки,
     * в зависимости от текущего направления.
     *
     * {{top: number, left: number}} Возвращает объект с координатами.
     */
    getNextPosition() {

        /* получаем позицию головы змейки */
        const position = { ...this.parts[this.parts.length - 1] };

        /* в зависимости от текущего положения
         * высчитываем значение от верхней и левой границы */
        switch(this.direction) {
            case SNAKE_DIRECTION_UP:
                position.top -= 1;
                break;
            case SNAKE_DIRECTION_DOWN:
                position.top += 1;
                break;
            case SNAKE_DIRECTION_LEFT:
                position.left -= 1;
                break;
            case SNAKE_DIRECTION_RIGHT:
                position.left += 1;
                break;
        }

        /* если змейка выходит за верхний или нижний край поля,
         * то изменяем координаты на противоположную сторону,
         * чтобы змейка выходя за границы возвращалась обратно на поле */
        if (position.top === -1) {
            position.top = config.size - 1;
        } else if (position.top > config.size - 1) {
            position.top = 0;
        }

        /* если змейка выходит за левый или правый край поля,
         * то изменяем координаты на противоположную сторону,
         * чтобы змейка выходя за границы возвращалась обратно на поле */
        if (position.left === -1) {
            position.left = config.size - 1;
        } else if (position.left > config.size - 1) {
            position.left = 0;
        }

        /** проверка, что змейка не врезалась в себя */
        for(let prop of this.parts){
            if(prop.top === position.top && prop.left === position.left){
                game.stop();
                return;
            }
        }
        return position;
    },

    /**
     * Функция устанавливает позицию для змейки.
     *
     * position {{top: number, left: number}} Координаты новой позиции.
     * shift Флаг, указывающий, нужно ли отрезать хвост для змейки.
     */
    setPosition(position, shift = true) {
        /* проверяем флаг, указывающий, нужно ли отрезать хвост для змейки,
         * если флаг положительный, то отрезаем хвост змейки (первый элемент в массиве),
         * чтобы длина змейки не изменилась,
         * если флаг будет отрицательным, то при установки позиции, мы не отрезаем хвост,
         * а значит увеличиваем змейку на одну клетку, это будет означать, что она съела еду */
        if (shift)
            this.parts.shift();
        else
            food.count++;

        /* добавляем новые координаты в конец массива (голова змейки) */
        this.parts.push(position);
        document.getElementById('score-value').innerHTML = food.count;
    },

    /**
     * Функция отрисовывает змейку на поле.
     */
    render() {
        cells.renderItems(this.parts, 'snake');
    }
};


const food = {

    items: [ ],
    count: 0,

    generateItem() {
        newItem = {
            top: getRandomNumber(0, config.size - 1),
            left: getRandomNumber(0, config.size - 1)
        };

        // проверка на то, что новая еда не будет нарисована на змейке
        for(let part of snake.parts){
            if(part.top == newItem.top && part.left == newItem.left){
                delete newItem;
                newItem = this.generateItem();
            }
        }
        this.items.push(newItem);
        return newItem;
    },
    /**
     * Функция выполняет поиск переданных координат змейки в массиве с едой.
     *
     * snakePosition {{top: number, left: number}} Позиция головы змейки.
     *
     * returns {number} Возвращает индекс найденного совпадения из массива с едой,
     * если ничего не найдено, то -1.
     */
    foundPosition(snakePosition) {
        /* здесь происходит вызов функции comparerFunction для каждого элемента в массиве,
         * если функция вернет true, то для этого элемента будет возвращен его индекс,
         * если функция ни разу не вернет true, то результатом будет -1 */
        return this.items.findIndex((item) =>
            item.top === snakePosition.top && item.left === snakePosition.left
        );
    },

    /**
     * Функция удаляет один элемент по индексу из массива с едой.
     * foundPosition Индекс найденного элемента.
     */
    removeItem(foundPosition) {
        this.items.splice(foundPosition, 1);
    },

    /**
     * Функция отрисовывает еду на поле.
     */
    render() {
        cells.renderItems(this.items, 'food');
    }
};


function init() {
    /* получаем кнопки */
    const startButton = document.getElementById('button-start');
    const pauseButton = document.getElementById('button-pause');
    const stopButton = document.getElementById('button-stop');

    /* добавляем обработчики клика на кнопки */
    startButton.addEventListener('click', game.start.bind(game));
    pauseButton.addEventListener('click', game.pause.bind(game));
    stopButton.addEventListener('click', game.stop.bind(game));

    /* добавляем обработчик при нажатии на любую кнопку на клавиатуре,
     * далее в методе мы будем проверять нужную нам клавишу */
    window.addEventListener('keydown', game.move);
}

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

window.addEventListener('load', init);

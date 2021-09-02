<template>
  <div id="app">
    <div class="control-panel">
      Раунд: {{ round }}

      <ul class="difficulty">
        <li v-for="(item, i) in difficulty" :key="i">
          <label>
            <input type="radio" :value="item.speed" v-model="current_speed">
            {{ item.name }}
          </label>
        </li>
      </ul>
    </div>

    <div class="simon">
      <div class="simon__sectors">
        <div v-for="(sector, index) in sectors"
             :key="index"
             :class="{ simon__sector_active: sector.active }"
             @click="setValue(index)"
             class="simon__sector"
        >
        </div>
      </div>
      <button @click="start">Start</button>
    </div>
  </div>
</template>

<script>
const AppSector = () => import('@/components/Sector');
let timer       = null;

function randomInteger(min, max) {
  // Генерирует идеально равномерное распределение целых чисел в заданном промежутке
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default {
  components: { AppSector },

  data() {
    return {
      sectors: [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
      ],
      sequence: [],
      round: 0,
      cursor: 0,
      difficulty: [
        {
          'name': 'hard',
          'speed': 400,
        },
        {
          'name': 'normal',
          'speed': 1000,
        },
        {
          'name': 'easy',
          'speed': 1500,
        },
      ],

      current_speed: 1500,

      // Выносим аудио в буфер. Нужно, чтобы останавливать воспроизведение текущей дорожки, не дожидаясь ее завершения
      current_audio: null,
      process_game: false,
    };
  },

  methods: {

    // При старте сбрасываем процесс и запускаем игру заново.
    start() {
      this.reset();
      this.process_game = true;
      this.updateSequence();
    },

    // Установить значение при клике на сектор
    setValue(i) {

      if ( ! this.process_game) {
        return;
      }

      if (this.sequence.length) {

        if (this.sequence[this.cursor] === i) {

          this.blink(this.cursor);
          this.cursor++;

          if (timer) {
            clearTimeout(timer);
          }

          // Если прокликали все сектора, то через секунду повышаем уровень
          if (this.cursor < this.sequence.length) {

            timer = setTimeout(() => {
              this.reset();
            }, this.current_speed);

          } else {

            setTimeout(() => {
              this.cursor = 0;
              this.updateSequence();
            }, 1000);
          }

        } else {
          this.reset();
        }
      }
    },

    // Обновляем последовательность и добавляем в нее еще один элемент
    updateSequence() {
      if (this.process_game) {
        this.round++;
        this.sequence.push(randomInteger(0, 3));
        this.autoBlink(0);
      }
    },

    // Рекурсивно запускаем автоподсвечивание
    autoBlink(i) {
      this.blink(i);

      setTimeout(() => {
        let next_item = i + 1,
            is_next   = next_item < this.sequence.length;

        if (is_next) {
          this.autoBlink(next_item);
        }

      }, 500);
    },

    // Подвечивание сектора
    blink(i) {
      let sector_index   = this.sequence[i],
          current_sector = this.sectors[sector_index],


          // Аудио генерируем прямо здесь, чтобы при большой скорости переключения дорожка не дергалась
          audio          = new Audio(current_sector.audio);
      // Локальная переменная audio нужна, чтобы при игре мелодия резко не обрывалась

      this.current_audio = audio;

      audio.play();

      current_sector.active = true;

      setTimeout(() => {
        current_sector.active = false;
        audio.pause();
      }, 500);
    },


    reset() {
      this.sequence     = [];
      this.round        = 0;
      this.cursor       = 0;
      this.process_game = false;

      if (timer) {
        clearTimeout(timer);
      }

      if (this.current_audio) {
        this.current_audio.pause();
      }
    },
  },

  mounted() {

    // Добавляем аудиодорожки к нашим секторам
    this.sectors.forEach(async (sector, i) => {

      let file     = await import(`@/assets/sounds/${i}.mp3`);
      sector.audio = file.default;
    });

  },
};


</script>
<style lang="scss">

#app {
  position: relative;
  width: 310px;
  margin: 0 auto;
  font-family: sans-serif;
}

.btn {
  cursor: pointer;
}

.simon {
  background: #fff;
  position: relative;
  float: left;
  width: 300px;
  height: 300px;
  border-radius: 150px 150px 150px 150px;
  box-shadow: 2px 1px 12px #aaa;
  border: 5px solid #fff;
  cursor: pointer;

  &__indicator {
    display: block;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__sector {
    opacity: 0.5;
    height: 100%;
    width: 100%;
    border-radius: 150px 150px 150px 150px;
    position: absolute;
    top: 0;
    left: 0;

    &:hover {
      box-shadow: 0 0 10px;
    }

    &_active {
      opacity: 1;
    }

    &:nth-child(1) {
      background: #FF5643;
      clip: rect(0px, 300px, 150px, 150px);
    }

    &:nth-child(2) {
      background: dodgerblue;
      clip: rect(0px, 150px, 150px, 0px);
    }

    &:nth-child(3) {
      background: #FEEF33;
      clip: rect(150px, 150px, 300px, 0px);
    }

    &:nth-child(4) {
      background: #BEDE15;
      clip: rect(150px, 300px, 300px, 150px);
    }
  }

  button {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
  }
}

li {
  list-style: none;
  font-weight: bold;


  label {
    cursor: pointer;
  }
}


</style>

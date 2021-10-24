import React, { Component } from "react";
import "./HomeStyle.scss";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="first-screen h-screen flex flex-col justify-center max-w-7xl mx-auto px-2 py-8 sm:px-6 lg:px-8">
          <div>
            <div className="mb-12">
              <h1 className="font-black text-7xl mr-8 uppercase">
                Челябинский Радиотехнический Техникум
              </h1>
            </div>
            <div className="grid">
              <div className="bg-purple-500 rounded-xl w-full px-8 py-4 flex flex-col justify-between">
                <div className="content">
                  <p className="text-white text-xl font-bold font-rubik mb-4">
                    Абитуриентам
                  </p>
                  <div className="links flex flex-col space-y-1">
                    <Link
                      to="/applicants"
                      className="text-white text-base hover:underline"
                    >
                      Приёмная комиссия
                    </Link>
                    <Link
                      to="/applicants"
                      className="text-white text-base hover:underline"
                    >
                      Специальности
                    </Link>
                    <Link
                      to="/applicants"
                      className="text-white text-base hover:underline"
                    >
                      Дни открытых дверей
                    </Link>
                    <Link
                      to="/applicants"
                      className="text-white text-base hover:underline"
                    >
                      Подготовительные курсы
                    </Link>
                  </div>
                </div>
                <Link>
                  <button className="mt-8 w-full h-10 rounded-lg bg-purple-700 text-base font-bold text-white">
                    Открыть
                  </button>
                </Link>
              </div>
              <div className=" bg-green-400 rounded-xl w-full px-8 py-4 flex flex-col justify-between">
                <div className="content">
                  <p className="text-white text-xl font-bold font-rubik mb-4">
                    Студентам
                  </p>
                  <div className="flex flex-col justify-between space-y-1">
                    <Link className="text-white text-base hover:underline">
                      Рабочий стол
                    </Link>
                    <Link className="text-white text-base hover:underline">
                      Расписание
                    </Link>
                    <Link className="text-white text-base hover:underline">
                      Трудоустройство
                    </Link>
                  </div>
                </div>
                <Link>
                  <button className="mt-8 w-full h-10 rounded-lg bg-green-600 text-base font-bold text-white">
                    Открыть
                  </button>
                </Link>
              </div>
              <div className=" bg-pink-300 rounded-xl w-full px-8 py-4 flex flex-col justify-between">
                <div className="content">
                  <p className="text-white text-xl font-bold font-rubik mb-4">
                    Сведения об образовательной организации
                  </p>
                  <div className="flex flex-col justify-between space-y-1">
                    <Link className="text-white text-base hover:underline">
                      Основные сведения
                    </Link>
                    <Link className="text-white text-base hover:underline">
                      Документы
                    </Link>
                    <Link className="text-white text-base hover:underline">
                      Образовательные стандарты
                    </Link>
                    <Link className="text-white text-base hover:underline">
                      Педагогический состав
                    </Link>
                  </div>
                </div>
                <Link>
                  <button className="mt-8 w-full h-10 rounded-lg bg-pink-400 text-base font-bold text-white">
                    Открыть
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="news pb-32 max-w-7xl mx-auto px-2 py-8 sm:px-6 lg:px-8">
          <div>
            <div className="mb-12 flex justify-between items-baseline">
              <h2 className="font-black text-5xl mr-8 uppercase">Новости</h2>
              <Link>
                <p className="font-bold font-open-sans text-gray-400">
                  Все новости
                </p>
              </Link>
            </div>
            <div className="newsList grid">
              <Link>
                <div className="news-item rounded-xl overflow-hidden">
                  <img
                    src={
                      "https://sun9-18.userapi.com/impf/a9sKg083CYvto9Qh4ZjPrT7yQxPFxFvjY8WsCw/DK4kxG_LE2E.jpg?size=720x720&quality=96&sign=0f53f52059216f4a3ff80091c827f1ce&type=album"
                    }
                    alt=""
                    className="w-full"
                  />
                  <div className="px-8 py-4 bg-gray-100">
                    <h3 className="mb-4 text-lg font-bold leading-5 font-open-sans">
                      Делегация ЧРТ вошла в список участников Всероссийского
                      форума студентов СПО «ПРО добро»
                    </h3>
                    <div className="flex justify-between">
                      <div className="flex text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="ml-1 text-base font-rubik font-light">
                          23 октября
                        </p>
                      </div>
                      <div className="flex text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <p className="ml-1 text-base font-rubik font-light">
                          253
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="news-item rounded-xl overflow-hidden">
                  <img
                    src={require("../news.png").default}
                    alt=""
                    className="w-full"
                  />
                  <div className="px-8 py-4 bg-gray-100">
                    <h3 className="mb-4 text-lg font-bold leading-5 font-open-sans">
                      Приглашаем Вас 23 октября 2021 г. в 14.30
                    </h3>
                    <div className="flex justify-between">
                      <div className="flex text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="ml-1 text-base font-rubik font-light">
                          23 октября
                        </p>
                      </div>
                      <div className="flex text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <p className="ml-1 text-base font-rubik font-light">
                          253
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="news-item rounded-xl overflow-hidden">
                  <img
                    src={require("../news.png").default}
                    alt=""
                    className="w-full"
                  />
                  <div className="px-8 py-4 bg-gray-100">
                    <h3 className="mb-4 text-lg font-bold leading-5 font-open-sans">
                      Представитель ЧРТ примет участие в финале «IT-Планета
                      2020/21»
                    </h3>
                    <div className="flex justify-between">
                      <div className="flex text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="ml-1 text-base font-rubik font-light">
                          23 октября
                        </p>
                      </div>
                      <div className="flex text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <p className="ml-1 text-base font-rubik font-light">
                          253
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="news-item rounded-xl overflow-hidden">
                  <img
                    src={require("../news.png").default}
                    alt=""
                    className="w-full"
                  />
                  <div className="px-8 py-4 bg-gray-100">
                    <h3 className="mb-4 text-lg font-bold leading-5 font-open-sans">
                      Студенты ЧРТ приняли участие в Часе прокурора
                    </h3>
                    <div className="flex justify-between">
                      <div className="flex text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="ml-1 text-base font-rubik font-light">
                          23 октября
                        </p>
                      </div>
                      <div className="flex text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <p className="ml-1 text-base font-rubik font-light">
                          253
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="max-w-7xl mx-auto px-2 py-8 sm:px-6 lg:px-8 mb-4">
            <h2 className="font-black text-5xl mr-8 uppercase">Мы тут</h2>
          </div>
          <iframe
            className="w-full h-screen"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4559.520393083212!2d61.37983!3d55.152475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf91f46437da2a4c!2z0KfQtdC70Y_QsdC40L3RgdC60LjQuSDQoNCw0LTQuNC-0YLQtdGF0L3QuNGH0LXRgdC60LjQuSDQotC10YXQvdC40LrRg9C8!5e0!3m2!1sru!2sru!4v1635077216114!5m2!1sru!2sru"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Home;

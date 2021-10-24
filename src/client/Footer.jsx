import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FooterStyle.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveId: 1,
    };
  }

  render() {
    return (
      <footer className="bg-black flex items-center">
        <div className="footer__wrapper flex mx-auto w-full">
          <div className="">
            <div className="h-full flex bg-purple-600">
              <h4 className="bg-purple-500 title font-black text-white uppercase">
                Абитуриентам
              </h4>
              <div className="content text-white p-16">
                <div className="links flex flex-col space-y-4 text-xl">
                  <Link to="/applicants" className="hover:underline">
                    Приёмная комиссия
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Специальности
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Дни открытых дверей
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Подготовительные курсы
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-full flex bg-green-500">
              <h4 className="bg-green-300 title font-black text-white uppercase">
                Студентам
              </h4>
              <div className="content text-white p-16">
                <div className="links flex flex-col space-y-4 text-xl">
                  <Link to="/applicants" className="hover:underline">
                    Рабочий стол
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Расписание
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Объявления
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Трудоустройство
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full flex bg-yellow-500">
              <h4 className="bg-yellow-400 title font-black text-white uppercase">
                Сведения
              </h4>
              <div className="content flex justify-between text-white p-16">
                <div className="links flex flex-col space-y-4 text-xl">
                  <Link to="/applicants" className="hover:underline">
                    Основные сведения
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Региональня площадка сетевого взаимодействия
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Структура и органы управления образовательной огранизацией
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Документы
                  </Link>
                </div>
                <div className="links flex flex-col space-y-4 text-xl">
                  <Link to="/applicants" className="hover:underline">
                    Образование
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Образовательные стандарты
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Руководство и педагогический состав
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Материально-техническое обеспечение и оснащенность
                    образовательного процесса
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Вакантные места для приема
                  </Link>
                </div>
                <div className="links flex flex-col space-y-4 text-xl">
                <Link to="/applicants" className="hover:underline">
                    Стипендии и иные виды материальной поддержки
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Доступная среда
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Платные образовательные услуги
                  </Link>
                  <Link to="/applicants" className="hover:underline">
                    Финансово-хозяйственная деятельность
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

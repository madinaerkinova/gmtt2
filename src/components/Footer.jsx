import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#088269] md:px-5 lg:px-4">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="justify-between border-b border-[#F8F7F3] pb-14 pt-10 md:flex">
          <div className="mb-5 md:mb-0">
            <h3 className="mb-[10px] border-b border-[#F8F7F3] pb-[10px] text-[12px] font-semibold text-[#F8F7F3] lg:mb-4 lg:pb-4 lg:text-sm">
              Покупателям
            </h3>
            <div className="block gap-5 md:flex xl:gap-[60px]">
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">О компании</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Сертификаты</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Вакансии</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Гарантии</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Услуги</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Акции</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Доставка</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Оплата</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Возврат</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">FAQ</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Лизинг</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Отзывы</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Блог</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5 md:mb-0">
            <h3 className="mb-[10px] border-b border-[#F8F7F3] pb-[10px] text-[12px] font-semibold text-[#F8F7F3] lg:mb-4 lg:pb-4 lg:text-sm">
              Каталог
            </h3>
            <div className="block md:flex md:gap-5 xl:gap-[60px]">
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Реанимация</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Хирургия</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Офтальмология</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Лабораторная диагностика</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Акушерство и Гинекология</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Гистология</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Косметология</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Орториноларингология</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Рентгенология и томография</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Стрерилизация</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Физиотерапия и реабилитация</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Функциональная диагностика</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Эндоскопия</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Новинки</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Распродажи</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Кабинеты под ключ</Link>
                </li>
                <li className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  <Link to="#">Скачать каталог</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-5 md:mb-0">
            <h3 className="mb-[10px] border-b border-[#F8F7F3] pb-[10px] text-[12px] font-semibold text-[#F8F7F3] lg:mb-4 lg:pb-4 lg:text-sm">
              Контакты
            </h3>
            <ul>
              <li className="mb-5 lg:mb-6">
                <h4 className="mb-1 text-[12px] font-semibold text-[#F8F7F3] lg:text-sm">
                  Адрес:
                </h4>
                <p className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  г. Москва, ул. Московская, д. 35
                </p>
              </li>
              <li className="mb-5 flex items-center gap-2 lg:mb-6">
                <Link
                  to="#"
                  className="mb-1 text-[12px] font-semibold text-[#F8F7F3] lg:text-sm"
                >
                  Карта проезда
                </Link>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M11 3V10M11 3H4M11 3L2.5 11.5"
                      stroke="#F8F7F3"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </li>
              <li className="mb-5 lg:mb-6">
                <p className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  График работы: <br /> Пн-Пт с 09:00-19:00, <br /> Сб-Вс -
                  выходной
                </p>
              </li>
              <li className="flex flex-col gap-y-[2px] lg:gap-y-[5px]">
                <p className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  +7 000-000-00-00
                </p>
                <p className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  +7 495-000-00-00
                </p>
                <p className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                  8 800-000-00-00
                </p>
                <a
                  className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm"
                  href="mailto: info@mail.ru"
                >
                  info@mail.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-14 pt-[10px] lg:pt-4">
          <ul className="md:flex block justify-between">
            <li className="mb-4 md:mb-0">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="41"
                  viewBox="0 0 96 41"
                  fill="none"
                >
                  <g clipPath="url(#clip0_36_13714)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.65753 25.3278C5.66979 25.5568 6.72891 25.4539 7.67815 25.0343C8.62739 24.6146 9.41631 23.9005 9.92816 22.9977L14.9099 14.2832C15.3765 14.3934 15.8241 14.5725 16.238 14.8145C17.3498 15.4648 18.1598 16.528 18.4914 17.7726C18.8231 19.0172 18.6497 20.3425 18.0089 21.4598L9.01011 37.1785C8.69553 37.7305 8.27479 38.2148 7.77215 38.6035C7.2695 38.9921 6.6949 39.2774 6.08146 39.4429C5.46803 39.6084 4.8279 39.6508 4.198 39.5677C3.56809 39.4846 2.96087 39.2776 2.41134 38.9587C1.3009 38.3059 0.492666 37.2415 0.162014 35.9965C-0.168639 34.7516 0.00495876 33.4264 0.64514 32.3087L4.65753 25.3278Z"
                      fill="#B7B7DB"
                    />
                    <path
                      d="M17.1545 0.652287C16.605 0.333377 15.9978 0.126404 15.3678 0.0433048C14.7379 -0.0397947 14.0978 0.00262275 13.4844 0.168111C12.8709 0.3336 12.2963 0.618885 11.7937 1.00752C11.2911 1.39615 10.8703 1.88044 10.5557 2.43246L1.54767 18.1744C0.906867 19.2918 0.733418 20.6171 1.06509 21.8617C1.39675 23.1063 2.20668 24.1695 3.31852 24.8198C3.73667 25.0546 4.18743 25.2258 4.65599 25.3278L9.64701 16.5947C10.1589 15.6918 10.9478 14.9777 11.897 14.5581C12.8463 14.1384 13.9054 14.0355 14.9176 14.2646L18.9207 7.27436C19.5521 6.15916 19.7209 4.84074 19.3906 3.60246C19.0603 2.36419 18.2575 1.30491 17.1545 0.652287Z"
                      fill="#BDDBC7"
                    />
                    <path
                      d="M26.6445 19.7022C26.6445 16.4556 27.6138 13.7683 29.5525 11.6402C30.4765 10.5969 31.618 9.76872 32.8965 9.21399C34.1751 8.65926 35.5596 8.39142 36.9528 8.42931C38.4295 8.41395 39.8869 8.76628 41.1935 9.45454C42.497 10.1502 43.6154 11.1471 44.4556 12.3625V8.77882H47.783V30.579C47.783 33.7106 46.8339 36.2302 44.9356 38.1378C43.0374 40.0453 40.5147 41.0022 37.3675 41.0084C34.6087 41.0084 32.3439 40.3172 30.573 38.9347C29.724 38.2908 29.0136 37.4822 28.4843 36.5573C27.955 35.6325 27.6177 34.6104 27.4927 33.5522L30.8992 32.8765C31.0955 34.2743 31.8253 35.542 32.9357 36.4135C34.0604 37.302 35.5377 37.7463 37.3675 37.7463C39.4864 37.7463 41.1951 37.1343 42.4937 35.9102C43.7923 34.6861 44.4432 32.9774 44.4463 30.784V27.028C43.5875 28.2145 42.4725 29.1924 41.1842 29.8893C39.8908 30.5683 38.4508 30.9203 36.9901 30.9145C35.5991 30.9525 34.2165 30.687 32.9385 30.1365C31.6606 29.586 30.5178 28.7638 29.5897 27.727C27.6263 25.6082 26.6445 22.9332 26.6445 19.7022ZM30.135 19.7022C30.135 22.0602 30.7998 23.9895 32.1295 25.4901C32.779 26.2201 33.5812 26.7981 34.4793 27.1831C35.3773 27.5681 36.3491 27.7506 37.3256 27.7177C38.2982 27.7506 39.2658 27.5656 40.1577 27.1761C41.0495 26.7867 41.8429 26.2026 42.4797 25.4668C43.7815 23.9942 44.4323 22.0727 44.4323 19.7022C44.4323 17.3317 43.7815 15.3947 42.4797 13.891C41.842 13.1569 41.0482 12.5746 40.1564 12.1868C39.2646 11.7989 38.2975 11.6154 37.3256 11.6495C36.3512 11.6165 35.3816 11.8005 34.487 12.1882C33.5924 12.5759 32.7951 13.1575 32.1528 13.891C30.7904 15.5151 30.0723 17.5833 30.135 19.7022Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M54.6586 30.798H51.3359V8.77879H54.598V11.6494C55.2176 10.6801 56.0678 9.87954 57.0726 9.31937C58.1192 8.73185 59.3024 8.43123 60.5025 8.44792C61.836 8.42272 63.151 8.76275 64.3051 9.43121C65.4444 10.1054 66.3502 11.112 66.9008 12.3158C67.5554 11.1487 68.5011 10.171 69.6457 9.47781C71.0897 8.64076 72.7649 8.29077 74.4233 8.4796C76.0817 8.66844 77.6352 9.38608 78.8541 10.5263C80.2677 11.9679 80.9745 14.0712 80.9745 16.8362V30.8166H77.6285V17.0133C77.6285 15.2797 77.2044 13.9624 76.3563 13.0615C75.9233 12.6051 75.3969 12.2476 74.8129 12.0135C74.229 11.7795 73.6014 11.6743 72.973 11.7054C72.2881 11.681 71.6053 11.7943 70.965 12.0384C70.3246 12.2826 69.7398 12.6526 69.2449 13.1267C68.2756 14.0587 67.7909 15.3978 67.7909 17.1438V30.798H64.4915V17.0133C64.4915 15.2797 64.069 13.9624 63.224 13.0615C62.7928 12.6066 62.2686 12.2501 61.6872 12.0161C61.1058 11.782 60.4808 11.6761 59.8547 11.7054C59.1608 11.6841 58.4702 11.8093 57.8279 12.0726C57.1855 12.336 56.6059 12.7317 56.1266 13.2339C55.1448 14.2405 54.6524 15.6525 54.6493 17.47L54.6586 30.798Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M81.0195 11.837V8.7799H84.6544V4.88867H88.0004V8.7799H95.8388V11.837H88.0004V24.0046C88.0004 25.3623 88.2987 26.3595 88.8952 26.9964C89.4917 27.6333 90.4128 27.944 91.6587 27.9285C92.764 27.8745 93.8497 27.6153 94.8602 27.1642L95.6291 30.0675C94.2325 30.7382 92.7089 31.1036 91.16 31.1393C89.094 31.1393 87.494 30.563 86.3601 29.4104C85.2261 28.2578 84.6576 26.6423 84.6544 24.5638V11.837H81.0195Z"
                      fill="#F8F7F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_13714">
                      <rect width="95.8406" height="41" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <p className="text-[12px] font-normal text-[#F8F7F3] md:mt-1 md:text-[10px] lg:mt-3">
                ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»
              </p>
            </li>
            <li className="mb-4 md:mb-0">
              <p className="mb-1 text-[12px] font-semibold text-[#F8F7F3] lg:mb-3 lg:text-sm">
                Мы в соцсетях
              </p>
              <div className="flex gap-[10px]">
                <Link to="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM18.8549 7.91625C19.3471 7.91625 19.4583 8.1725 19.3471 8.525V8.52375C19.1738 9.33197 17.7327 11.4737 17.2862 12.1373C17.2013 12.2635 17.1523 12.3363 17.1549 12.3363C16.9802 12.6244 16.9168 12.7525 17.1549 13.0728C17.2411 13.1915 17.4242 13.3726 17.6334 13.5795C17.8478 13.7917 18.0897 14.031 18.2827 14.2578C18.9818 15.0584 19.5221 15.7309 19.6649 16.1953C19.7921 16.6597 19.5696 16.9 19.093 16.9H17.4568C17.023 16.9 16.7995 16.6489 16.3231 16.1139C16.1189 15.8845 15.8682 15.6029 15.5346 15.2666C14.5655 14.3216 14.1364 14.1938 13.8983 14.1938C13.5646 14.1938 13.4693 14.2737 13.4693 14.7541V16.2434C13.4693 16.6437 13.3424 16.8841 12.2936 16.8841C10.5621 16.8841 8.63988 15.8259 7.28957 13.8572C5.25613 10.9747 4.7002 8.79688 4.7002 8.36438C4.7002 8.12406 4.77957 7.9 5.25613 7.9H6.90832C7.32145 7.9 7.48145 8.07625 7.63895 8.5425C8.44895 10.8966 9.79926 12.9625 10.3552 12.9625C10.5633 12.9625 10.6571 12.8659 10.6571 12.3375V9.90187C10.6179 9.21 10.379 8.9085 10.2018 8.68493C10.0919 8.54628 10.0058 8.4376 10.0058 8.28438C10.0058 8.09219 10.1646 7.9 10.4189 7.9H12.9927C13.3424 7.9 13.4693 8.09219 13.4693 8.50844V11.7919C13.4693 12.1441 13.6124 12.2722 13.7236 12.2722C13.9302 12.2722 14.1049 12.1441 14.4861 11.7597C15.6618 10.4306 16.5036 8.38062 16.5036 8.38062C16.6149 8.14062 16.8055 7.91625 17.2183 7.91625H18.8549Z"
                      fill="#F8F7F3"
                    />
                  </svg>
                </Link>
                <Link to="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM17.6192 7.87282C17.7207 6.72313 16.5067 7.19657 16.5067 7.19657C15.6077 7.56874 14.6799 7.94696 13.7427 8.32927C10.8475 9.51028 7.85684 10.7302 5.30884 11.9309C3.92603 12.4381 4.7354 12.9453 4.7354 12.9453L6.9279 13.6219C7.93947 13.9263 8.47915 13.5878 8.47915 13.5878L13.201 10.3753C14.8873 9.22563 14.4826 10.1725 14.0779 10.5781L10.537 13.96C9.99697 14.4334 10.267 14.8391 10.5032 15.0422C11.1719 15.6321 12.8163 16.7114 13.5355 17.1834C13.7231 17.3066 13.8478 17.3884 13.8757 17.4094C14.0445 17.5447 14.9551 18.1531 15.562 18.0181C16.1692 17.8828 16.2367 17.105 16.2367 17.105L17.046 11.7956C17.1672 10.8768 17.3059 9.99344 17.4169 9.2869C17.5224 8.61535 17.6029 8.10353 17.6192 7.87282Z"
                      fill="#F8F7F3"
                    />
                  </svg>
                </Link>
                <Link to="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.725 17.6667C9.78333 18.2917 10.9917 18.625 12.225 18.625C16.0083 18.625 19.0917 15.55 19.075 11.7667C19.0784 10.8643 18.9026 9.97021 18.5578 9.13624C18.2131 8.30227 17.7062 7.54502 17.0667 6.90838C15.775 5.60838 14.05 4.89172 12.2167 4.89172C8.43333 4.89172 5.35 7.97505 5.35 11.7584C5.35095 13.0494 5.71479 14.3142 6.4 15.4084L6.56667 15.6667L5.875 18.2L8.475 17.5167L8.725 17.6667ZM15.7173 13.3584C15.8412 13.4187 15.9406 13.4672 15.9917 13.4917C16.0329 13.5115 16.0708 13.529 16.1056 13.545C16.2468 13.6102 16.3365 13.6515 16.3833 13.725C16.4417 13.8167 16.4417 14.225 16.2667 14.7084C16.1 15.1917 15.275 15.6334 14.875 15.6917C14.5167 15.7417 14.0667 15.7667 13.575 15.6084C13.275 15.5167 12.8917 15.3917 12.4 15.175C10.4242 14.3226 9.09579 12.3809 8.89544 12.0881C8.88622 12.0746 8.8794 12.0646 8.875 12.0584L8.87338 12.0562C8.76725 11.9148 8.03333 10.9364 8.03333 9.92505C8.03333 8.98704 8.48733 8.48885 8.70157 8.25375C8.71953 8.23403 8.73582 8.21617 8.75 8.20005C8.94167 7.99172 9.15833 7.94172 9.3 7.94172H9.7C9.71447 7.94268 9.72962 7.94286 9.74534 7.94305C9.86541 7.9445 10.0193 7.94636 10.1667 8.30005C10.3333 8.71672 10.75 9.73338 10.8 9.83338C10.85 9.93338 10.8833 10.05 10.8167 10.1917C10.811 10.2031 10.8055 10.2142 10.8001 10.225C10.7425 10.3409 10.6998 10.4267 10.6083 10.5334C10.5764 10.5706 10.5428 10.6113 10.5088 10.6523C10.4364 10.7399 10.3624 10.8293 10.3 10.8917C10.1917 11 10.0917 11.1084 10.2083 11.3167C10.3333 11.525 10.7417 12.2 11.3583 12.75C12.0281 13.3486 12.6126 13.5998 12.8982 13.7226C12.9466 13.7434 12.9865 13.7606 13.0167 13.775C13.225 13.8834 13.35 13.8667 13.4667 13.725C13.5833 13.5917 13.975 13.125 14.1167 12.9167C14.2583 12.7167 14.3917 12.75 14.5833 12.8167C14.7218 12.8733 15.3354 13.1723 15.7173 13.3584Z"
                      fill="#F8F7F3"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM15.3897 4.12509C16.3927 4.54144 17.3027 5.15332 18.0667 5.92505C19.625 7.48338 20.4833 9.55838 20.4833 11.7667C20.4833 16.3167 16.775 20.025 12.225 20.025C10.8417 20.025 9.48333 19.675 8.275 19.0167L3.9 20.1667L5.06667 15.8834C4.35 14.6334 3.96667 13.2167 3.96667 11.7584C3.96667 7.20838 7.675 3.50005 12.225 3.50005C13.3109 3.49627 14.3867 3.70875 15.3897 4.12509Z"
                      fill="#F8F7F3"
                    />
                  </svg>
                </Link>
              </div>
            </li>
            <li className="flex mb-4 md:mb-0 flex-col gap-y-1 lg:gap-y-2">
              <Link
                to="#"
                className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm"
              >
                Партнерская программа
              </Link>
              <Link
                to="#"
                className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm"
              >
                Оптовые продажи
              </Link>
              <Link
                to="#"
                className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm"
              >
                Реквизиты
              </Link>
            </li>
            <li className="flex mb-4 md:mb-0 flex-col gap-y-1 lg:gap-y-2">
              <Link
                to="#"
                className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm"
              >
                Политика конфиденциальности
              </Link>
              <Link
                to="#"
                className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm"
              >
                Условия соглашения
              </Link>
              <Link
                to="#"
                className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm"
              >
                Карта сайта
              </Link>
            </li>
            <li className="flex flex-col gap-y-2">
              <p className="text-[12px] font-normal text-[#F8F7F3] lg:text-sm">
                Способы оплаты
              </p>
              <div className="grid grid-cols-3 gap-[10px] gap-y-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                <i className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="30"
                    viewBox="0 0 49 30"
                    fill="none"
                  >
                    <path
                      d="M48.9998 14.681C48.9998 22.7367 42.4414 29.3619 34.2998 29.3619C26.2337 29.3619 19.5998 22.7367 19.5998 14.681C19.5998 6.62525 26.1583 0 34.2244 0C42.4414 0 48.9998 6.62525 48.9998 14.681Z"
                      fill="#F9B50B"
                    />
                    <path
                      d="M29.3246 14.7562C29.3246 13.7022 29.1738 12.6482 29.0231 11.6695H19.9769C20.0523 11.1425 20.2031 10.6907 20.3538 10.0885H28.42C28.2692 9.56144 28.0431 9.03444 27.8169 8.50743H20.9569C21.1831 7.98042 21.4846 7.5287 21.7861 6.9264H26.9877C26.6861 6.39939 26.3092 5.87238 25.8569 5.34537H22.9923C23.4446 4.81837 23.8969 4.36664 24.5 3.83964C21.9369 1.43045 18.4692 0 14.6246 0C6.63384 0.225861 0 6.62525 0 14.681C0 22.7367 6.55846 29.3619 14.7 29.3619C18.5446 29.3619 21.9369 27.8562 24.5754 25.5223C25.1031 25.0706 25.5554 24.5436 26.0831 23.9413H23.0677C22.6908 23.4895 22.3138 22.9625 22.0123 22.4355H27.1385C27.44 21.9838 27.7415 21.4568 27.9677 20.8545H21.1077C20.8815 20.4028 20.6554 19.8758 20.5046 19.2735H28.5708C29.0231 17.9183 29.3246 16.4126 29.3246 14.7562Z"
                      fill="#C8191C"
                    />
                    <path
                      d="M19.9022 18.445L20.1284 17.0898C20.053 17.0898 19.9022 17.1651 19.7514 17.1651C19.2237 17.1651 19.1484 16.864 19.2237 16.7134L19.676 14.0031H20.5053L20.7314 12.4973H19.9776L20.1284 11.5939H18.5453C18.5453 11.5939 17.6407 16.7134 17.6407 17.3157C17.6407 18.2191 18.1684 18.6709 18.9222 18.6709C19.3745 18.6709 19.7514 18.5203 19.9022 18.445Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M20.4297 15.9599C20.4297 18.1432 21.9374 18.6702 23.1435 18.6702C24.2743 18.6702 24.802 18.4444 24.802 18.4444L25.1035 16.9386C25.1035 16.9386 24.2743 17.3151 23.4451 17.3151C21.7112 17.3151 22.0128 16.0352 22.0128 16.0352H25.1789C25.1789 16.0352 25.4051 15.0564 25.4051 14.6047C25.4051 13.626 24.8774 12.3461 23.1435 12.3461C21.6358 12.2708 20.4297 14.0024 20.4297 15.9599ZM23.1435 13.7013C23.9728 13.7013 23.822 14.68 23.822 14.7553H22.0881C22.1635 14.68 22.3143 13.7013 23.1435 13.7013Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M33.0176 18.4453L33.3192 16.7137C33.3192 16.7137 32.5653 17.0901 31.9622 17.0901C30.9069 17.0901 30.3792 16.262 30.3792 15.2832C30.3792 13.4011 31.2838 12.4223 32.4146 12.4223C33.1684 12.4223 33.8469 12.8741 33.8469 12.8741L34.073 11.2177C34.073 11.2177 33.1684 10.8413 32.2638 10.8413C30.4545 10.8413 28.7207 12.4223 28.7207 15.3585C28.7207 17.316 29.6253 18.5959 31.5099 18.5959C32.1884 18.6712 33.0176 18.4453 33.0176 18.4453Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M11.3834 12.272C10.328 12.272 9.49874 12.5731 9.49874 12.5731L9.27259 13.9283C9.27259 13.9283 9.95105 13.6271 11.0064 13.6271C11.5341 13.6271 11.9864 13.7024 11.9864 14.1541C11.9864 14.4553 11.9111 14.5306 11.9111 14.5306H11.2326C9.87567 14.5306 8.44336 15.0576 8.44336 16.8645C8.44336 18.2949 9.34797 18.5961 9.95105 18.5961C11.0064 18.5961 11.5341 17.9185 11.6095 17.9185L11.5341 18.5208H12.8157L13.4187 14.2294C13.4187 12.3473 11.9111 12.272 11.3834 12.272ZM11.6849 15.7352C11.6849 15.961 11.5341 17.2409 10.6295 17.2409C10.1772 17.2409 10.0264 16.8645 10.0264 16.6386C10.0264 16.2622 10.2526 15.7352 11.4587 15.7352C11.6095 15.7352 11.6849 15.7352 11.6849 15.7352Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M14.9256 18.5952C15.3026 18.5952 17.2626 18.6705 17.2626 16.5624C17.2626 14.605 15.3779 14.9814 15.3779 14.2285C15.3779 13.8521 15.6795 13.7015 16.2072 13.7015C16.4333 13.7015 17.2626 13.7768 17.2626 13.7768L17.4887 12.3464C17.4887 12.3464 16.961 12.1958 15.981 12.1958C14.8502 12.1958 13.6441 12.6475 13.6441 14.2285C13.6441 16.0354 15.6041 15.8849 15.6041 16.5624C15.6041 17.0142 15.0764 17.0895 14.6995 17.0895C14.021 17.0895 13.2672 16.8636 13.2672 16.8636L13.041 18.294C13.1918 18.4446 13.6441 18.5952 14.9256 18.5952Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M45.9847 11.0666L45.6831 13.1746C45.6831 13.1746 45.0801 12.4218 44.1755 12.4218C42.7431 12.4218 41.537 14.1534 41.537 16.1861C41.537 17.466 42.1401 18.7459 43.497 18.7459C44.4016 18.7459 45.0047 18.1436 45.0047 18.1436L44.9293 18.6706H46.5124L47.6432 11.2172L45.9847 11.0666ZM45.2308 15.1321C45.2308 15.9602 44.8539 17.0896 43.9493 17.0896C43.4216 17.0896 43.1201 16.6378 43.1201 15.8097C43.1201 14.5298 43.6478 13.7769 44.4016 13.7769C44.9293 13.8522 45.2308 14.2286 45.2308 15.1321Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M2.86316 18.5198L3.76778 12.9486L3.91855 18.5198H4.97393L7.00931 12.9486L6.18008 18.5198H7.83854L9.12008 11.0664H6.55701L4.97393 15.6589L4.89855 11.0664H2.63701L1.35547 18.5198H2.86316Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M26.9878 18.5201C27.4401 15.9604 27.5154 13.8523 28.6462 14.2288C28.797 13.25 29.0231 12.7983 29.1739 12.4219H28.8724C28.1939 12.4219 27.5908 13.3253 27.5908 13.3253L27.7416 12.4972H26.2339L25.2539 18.5201H26.9878Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M36.6373 12.272C35.5819 12.272 34.7526 12.5731 34.7526 12.5731L34.5265 13.9283C34.5265 13.9283 35.205 13.6271 36.2603 13.6271C36.788 13.6271 37.2403 13.7024 37.2403 14.1541C37.2403 14.4553 37.165 14.5306 37.165 14.5306H36.4865C35.1296 14.5306 33.6973 15.0576 33.6973 16.8645C33.6973 18.2949 34.6019 18.5961 35.205 18.5961C36.2603 18.5961 36.788 17.9185 36.8634 17.9185L36.788 18.5208H38.2203L38.8234 14.2294C38.8234 12.3473 37.165 12.272 36.6373 12.272ZM37.0142 15.7352C37.0142 15.961 36.8634 17.2409 35.9588 17.2409C35.5065 17.2409 35.3557 16.8645 35.3557 16.6386C35.3557 16.2622 35.5819 15.7352 36.788 15.7352C36.9388 15.7352 36.9388 15.7352 37.0142 15.7352Z"
                      fill="#F8F7F3"
                    />
                    <path
                      d="M40.0307 18.5201C40.483 15.9604 40.5584 13.8523 41.6892 14.2288C41.84 13.25 42.0661 12.7983 42.2169 12.4219H41.9153C41.2369 12.4219 40.6338 13.3253 40.6338 13.3253L40.7846 12.4972H39.2769L38.2969 18.5201H40.0307Z"
                      fill="#F8F7F3"
                    />
                  </svg>
                </i>
                <i className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="20"
                    viewBox="0 0 63 20"
                    fill="none"
                  >
                    <path
                      d="M58.7491 0.351562H54.7759C53.5747 0.351562 52.6507 0.713446 52.0963 1.88957L44.5195 18.8076H49.8787C49.8787 18.8076 50.8027 16.5459 50.9875 16.003C51.5419 16.003 56.8087 16.003 57.5479 16.003C57.7327 16.6363 58.1947 18.7172 58.1947 18.7172H62.9995L58.7491 0.351562ZM52.4659 12.2033C52.9279 11.1176 54.4987 7.04641 54.4987 7.04641C54.4987 7.13688 54.9607 5.96076 55.1455 5.32746L55.5151 6.95594C55.5151 6.95594 56.5315 11.389 56.7163 12.2937H52.4659V12.2033Z"
                      fill="#3362AB"
                    />
                    <path
                      d="M44.7224 13.2149C44.7224 17.0739 41.2612 19.6465 35.8872 19.6465C33.6101 19.6465 31.4241 19.1871 30.24 18.6358L30.9687 14.4093L31.6063 14.685C33.2458 15.42 34.3388 15.6957 36.3426 15.6957C37.8 15.6957 39.3484 15.1444 39.3484 13.858C39.3484 13.0311 38.7108 12.4798 36.707 11.561C34.7942 10.6422 32.2439 9.17212 32.2439 6.50758C32.2439 2.83235 35.7961 0.351562 40.8058 0.351562C42.7186 0.351562 44.3581 0.719086 45.36 1.17849L44.6313 5.22125L44.267 4.85372C43.3561 4.4862 42.172 4.11868 40.4414 4.11868C38.5287 4.21056 37.6178 5.03748 37.6178 5.77253C37.6178 6.59946 38.7108 7.24262 40.4414 8.06955C43.3561 9.44776 44.7224 11.0097 44.7224 13.2149Z"
                      fill="#3362AB"
                    />
                    <path
                      d="M0 0.727897L0.0904615 0.351562H7.87015C8.95569 0.351562 9.76985 0.727897 10.0412 1.95098L11.76 10.4185C10.0412 5.90249 6.06092 2.23323 0 0.727897Z"
                      fill="#F9B50B"
                    />
                    <path
                      d="M22.6791 0.442033L14.8491 18.8076H9.53906L5.03906 3.42757C8.27906 5.5084 10.9791 8.76536 11.9691 11.0271L12.5091 12.927L17.3691 0.351562H22.6791V0.442033Z"
                      fill="#3362AB"
                    />
                    <path
                      d="M25.1067 0.351562H30.24L26.9733 18.8076H21.84L25.1067 0.351562Z"
                      fill="#3362AB"
                    />
                  </svg>
                </i>{" "}
                <i className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="66"
                    height="20"
                    viewBox="0 0 66 20"
                    fill="none"
                  >
                    <path
                      d="M58.5602 0.470703H46.1191C46.8439 4.56178 50.8298 8.41221 55.1782 8.41221H65.0827C65.2035 8.05123 65.2035 7.4496 65.2035 7.08862C65.2035 3.47885 62.1838 0.470703 58.5602 0.470703Z"
                      fill="url(#paint0_linear_36_13693)"
                    />
                    <path
                      d="M47.7108 9.20625V19.5302H53.9742V14.0573H59.486C62.4924 14.0573 65.1231 11.9427 65.9999 9.20625H47.7108Z"
                      fill="#4FAD50"
                    />
                    <path
                      d="M26.2402 0.470703V19.5303H31.623C31.623 19.5303 32.9687 19.5303 33.7027 18.1689C37.3728 10.8669 38.4738 8.63911 38.4738 8.63911H39.2078V19.5303H45.3246V0.470703H39.9418C39.9418 0.470703 38.5961 0.594474 37.8621 1.83211C34.8037 8.14406 33.091 11.3619 33.091 11.3619H32.357V0.470703H26.2402Z"
                      fill="#4FAD50"
                    />
                    <path
                      d="M0 19.5303V0.470703H6.13304C6.13304 0.470703 7.8503 0.470699 8.83159 3.1935C11.2848 10.3718 11.5301 11.3619 11.5301 11.3619C11.5301 11.3619 12.0208 9.62922 14.2287 3.1935C15.2099 0.470699 16.9272 0.470703 16.9272 0.470703H23.0602V19.5303H16.9272V9.25794H16.1912L12.7567 19.5303H10.0582L6.62371 9.25794H5.88774V19.5303H0Z"
                      fill="#4FAD50"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_36_13693"
                        x1="-0.0743544"
                        y1="10.1371"
                        x2="65.8521"
                        y2="10.1371"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#27B1E6" />
                        <stop offset="1" stopColor="#148ACA" />
                      </linearGradient>
                    </defs>
                  </svg>
                </i>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:flex block items-center justify-between pb-3 lg:pb-5">
          <p className="font-normal text-[#f8f7f3] mb-4 md:mb-0 text-[10px] lg:text-[12px]">
            © 2022 Медоборудование <br /> Все права защищены
          </p>
          <p className="font-normal text-[#f8f7f3] opacity-60 text-[10px] lg:text-[12px]">
            Информация на данном сайте носит справочный характер и не является
            публичной офертой, определяемой положениями Статьи 437 Гражданского
            кодекса Российской Федерации
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

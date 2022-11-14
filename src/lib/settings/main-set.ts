import { writable } from 'svelte/store';
// -- Главное меню сайта
export const links = writable([
    { text: 'Главная',rout: '/' },
    { text: 'Проекты',rout: '/projects' },
    { text: 'Примеры работы',rout: '/examples' },
    { text: 'Отзывы клиентов',rout: '/reviews' },
    { text: 'Цены',rout: '/price' },
    { text: 'Контакты',rout: '/contacts' },
    ]
);
// -- Блок с контактами на сайте --
 export const contakts = writable({
    phone: [
        {number:'+7(4832)30-02-25', name: 'Стационарный'},
        {number: '+7-930-820-02-25', name: 'Мобильный'},
    ], 
    email: [
        {email: 'info@karkascentr.ru', name: 'Основной'}
    ],
    address: '241022, г. Брянск, ул. Пушкина, д. 66, третий этаж',
    messengers: [
        {url: 'https://wa.me/message/S2HVLZUQSNBBN1', name: 'WhatsApp', faClass: 'fa-whatsapp'}
    ]
});

// -- Социальные сети --

 export const socialNetwork = writable([
     {name: 'В контакте', href: 'https://vk.com/karkascentr ', class: 'fa-vk'},
     {name: 'Одноклассники', href: 'https://ok.ru/karkascentr.ru', class: 'fa-odnoklassniki'},
     {name: 'Ютуб', href: 'https://www.youtube.com/channel/UCJoHMcmHq115v7XriMA5ZiQ?view_as=subscriber', class: 'fa-youtube-square'},
    //  {name: 'Инстаграм', href: 'https://www.instagram.com/karkascentr.ru/', class: 'fa-instagram'},
    //  {name: 'Фейсбук', href: 'https://www.facebook.com/karkascentr/', class: 'fa-facebook'},
]);

export let logo = writable('/img/logo3.jpg') 




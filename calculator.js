// --- НАСТРОЙКИ ЦЕН (меняйте на свои) ---

const basePrice = 2700; // Базовая стоимость книги 
const pricePerSpread = 300; // Стоимость каждого дополнительного разворота
const individualCoverSurcharge = 300; // Доплата за индивидуальную обложку
const baseSpreadsCount = 2; // <-- ВАЖНО: количество разворотов, включенных в базу

// --- ЛОГИКА КАЛЬКУЛЯТОРА (этот блок можно не трогать) ---

// Находим нужные элементы на странице
const spreadsInput = document.getElementById('spreads');
const coverTypeSelect = document.getElementById('cover-type');
const totalPriceElement = document.getElementById('total-price');

// Функция для расчета итоговой стоимости
function calculatePrice() {
    // Получаем текущие значения от пользователя
    const numberOfSpreads = parseInt(spreadsInput.value);
    const coverType = coverTypeSelect.value;

    // Рассчитываем стоимость разворотов
    let spreadsCost = 0;
    // Проверяем, превышает ли количество разворотов базовое
    if (numberOfSpreads > baseSpreadsCount) {
        // Считаем доплату только за те развороты, что сверх базы
        spreadsCost = (numberOfSpreads - baseSpreadsCount) * pricePerSpread;
    }

    // Проверяем, нужно ли доплачивать за обложку
    let coverCost = 0;
    if (coverType === 'individual') {
        coverCost = individualCoverSurcharge;
    }

    // Считаем итоговую стоимость
    const total = basePrice + spreadsCost + coverCost;

    // Выводим результат на страницу
    totalPriceElement.textContent = total;
}

// Добавляем "слушателей событий", чтобы расчет происходил автоматически
spreadsInput.addEventListener('input', calculatePrice);
coverTypeSelect.addEventListener('change', calculatePrice);

// Вызываем функцию один раз при загрузке страницы, чтобы посчитать стоимость по умолчанию
document.addEventListener('DOMContentLoaded', calculatePrice);
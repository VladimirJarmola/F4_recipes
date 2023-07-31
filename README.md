<h1>Запуск проекта локально</h1>

<h4>1. Выберите папку и введите в IDE или BASH:</h4>
<blockquote>cd _folder_ </blockquote>
<p>где <em><b> _folder_ </b></em> папка в которую Вы хотите скопировать проект</p>

<h4>2. Копируем проект с репозитория:</h4>
<blockquote>git clone https://github.com/VladimirJarmola/F4_recipes.git</blockquote>

<h4>3. Переходим в папку проекта:</h4>
<blockquote>cd F4_recipes</blockquote>

<h3>4. Запуск backend части проекта:</h3>

<h4>4.1 Переходим в папку backend части проекта: </h4>
<blockquote>cd backend</blockquote>

<h4>4.2 Создаем виртуальное окружение: </h4>
<blockquote>python -m venv venv</blockquote>

<h4>4.3 Активируем виртуальное окружение: </h4>
<blockquote>venv/scripts/activate</blockquote>

<h4>4.4 Переходим в папку: </h4>
<blockquote>cd recipes_server</blockquote>

<h4>4.5 Устанавливаем зависимости: </h4>
<blockquote>pip install -r requirements.txt</blockquote>

<h4>4.6 Запускаем сервер:  </h4>
<blockquote>python manage.py runserver</blockquote>
<p>сервер запуститься на http://127.0.0.1:8000/</p>

<h3>5. Запуск frontend части проекта:</h3>

<h4>5.1 Запускаем новое окно терминала и переходим в папку проекта:  </h4>
<blockquote>cd F4_recipes</blockquote>

<h4>5.2 Переходим в папку frontend части проекта: </h4>
<blockquote>cd frontend</blockquote>

<h4>5.3 Устанавливаем зависимости:  </h4>
<blockquote>npm install</blockquote>

<h4>5.4 Запускаем: </h4>
<blockquote>npm start</blockquote>
<p>сервер запуститься на http://localhost:8080/</p>

<h1>Application Programming Interface</h1>

<h3>DRF</h3>

<h4>Список рецептов:</h4>
<blockquote>http://127.0.0.1:8000/api/recipes</blockquote>

<h4>Список категорий: </h4>
<blockquote>http://127.0.0.1:8000/api/categories</blockquote>

<h4>Рецепт по id:  </h4>
<blockquote>http://127.0.0.1:8000/api/recipeItem/&ltint:pk&gt</blockquote>
<p>

<h3>Swagger</h3>
<blockquote>http://127.0.0.1:8000/swagger/</blockquote>

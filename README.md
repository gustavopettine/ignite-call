<h1 align="center">
  Ignite Call
</h1>

<p align="center">
  Ignite Call is an application for automating the process of scheduling appointments, allowing users to configure their availability times and other people to choose a time to meet with them, integrated with Google Calendar.
</p>

<p align="center">
  <a href="#usage">Usage</a> •
  <a href="#preview">Preview</a> •
  <a href="#license">License</a>
</p>

## Usage

```sh
git clone https://github.com/gustavopettine/ignite-call

cd ignite-call
```

```sh
npm install

npm run dev
```

```sh
docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest

docker start mysql
```

```sh
npx prisma migrate dev

npx prisma studio
```

## Preview

### Home page

![Screenshot](/assets/home_page.png)

### Register page

![Screenshot](/assets/register_page.png)

### Connect Calendar page

![Screenshot](/assets/connect_calendar_page.png)

### Connected Calendar page

![Screenshot](/assets/connected_calendar_page.png)

### Time Intervals page

![Screenshot](/assets/time_intervals_page.png)

### Update Profile page

![Screenshot](/assets/update_profile_page.png)

### Schedule page

![Screenshot](/assets/schedule_page.png)

## License

MIT

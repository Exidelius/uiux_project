import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";

const Films = () => {
  // TODO Уменьшить отсупы на странице с фильмами при уменьшении размеров 
  // TODO Добавить в описании фильма разворачиваемое описание, если оно слишком большое
  // TODO когда буду делать описания на главной странице, убрать их при маленьком размере окна
  // TODO адаптивность для страницы фильма
  // TODO поменять иконку переключения темы
  // Добавить для пагинации нижнюю рамку, которая будет двигаться как хэдер
  
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Style.Films>
      <Style.Content>
        <Style.Title>Films</Style.Title>
        <Style.List>{filmsList}</Style.List>
        <Pagination
          totalUsersCount={filmList?.data?.movie_count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;

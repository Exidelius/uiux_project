import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./index.styled";
import { ST } from "next/dist/shared/lib/utils";

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.Card
            src={
              props.medium_cover_image
                ? props.medium_cover_image
                : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
            }
            alt={props.medium_cover_image}
          ></Style.Card>

          {/* Тут кончается картинка и начинается название */}

          <Style.CardDescription>
            {/* <Style.DescriptionContentHeader> */}
            <Style.Name>{props.title}</Style.Name>
            <Style.Text>{props.year} {props.language}</Style.Text>
            <Style.CardGenres>
              {props.genres ? (
                  <Style.Genres>
                    {0 in props.genres ? (
                      <Style.GenresItem>
                        <Style.GenresText>
                          {props.genres[0].toUpperCase()}
                        </Style.GenresText>
                      </Style.GenresItem>
                    ) : (
                      ""
                    )}
                    {1 in props.genres ? (
                      <Style.GenresItem>
                        <Style.GenresText>
                          {props.genres[1].toUpperCase()}
                        </Style.GenresText>
                      </Style.GenresItem>
                    ) : (
                      ""
                    )}
                    {2 in props.genres ? (
                      <Style.GenresItem>
                        <Style.GenresText>
                          {props.genres[2].toUpperCase()}
                        </Style.GenresText>
                      </Style.GenresItem>
                    ) : (
                      ""
                    )}
                  </Style.Genres>
                ) : (
                  ""
                )}
            </Style.CardGenres>

            <Style.Rating> 
              {props.rating} / 10 
              <Style.RatingIcon>
                <VscStarFull />
              </Style.RatingIcon>
            </Style.Rating>

          </Style.CardDescription>
        </Style.Content>
      </Link>
    </Style.Film>
  );
};

export default Film;

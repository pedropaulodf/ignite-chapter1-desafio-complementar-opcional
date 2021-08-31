import { Button } from "./Button";
interface GenreProps {
  filmSelected: Function;
  genreSelected: number;
  genres: Genre[]
}
interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({filmSelected, genreSelected, ...props}:GenreProps) {

  function handleClickButton(id:number){
    filmSelected(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre:Genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={genreSelected === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

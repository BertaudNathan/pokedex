import React from 'react';
import { Pokemon } from '../models/Pokemon';
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red,green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LaunchIcon from '@mui/icons-material/Launch';
import PokemonModal from './PokemonModal';
import { RootState,AppDispatch } from '../store/store'; // ajuste le chemin si besoin
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../store/slices/pokemon.slice';
import Button from '@mui/material/Button';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useNavigate } from 'react-router-dom';
interface Card {

 pkmn : Pokemon;
}
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));

const CardPokemon: React.FC<Card> = ({ pkmn }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [modalOpen, setModalOpen] =  React.useState(false);
  
    const handleExpandClick = () => setExpanded(!expanded);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
const dispatch = useDispatch<AppDispatch>();
const navigate = useNavigate();

    const handleToggleCatch = () => {
  if (isCaught) {
    dispatch(removePokemon(pkmn.pokedex_id));
  } else {
    // On transforme le format si nécessaire pour respecter ton modèle dans le slice
    dispatch(addPokemon(pkmn.pokedex_id));
  }
};

      const isCaught = useSelector((state: RootState) =>
  state.pokemon.pokemons.some(p=> p === pkmn.pokedex_id)
);
    return (
    <Card sx={{ minWidth: 275 }}>
         <CardHeader
  avatar={
    <Avatar
      sx={{ bgcolor: isCaught ? green[700] : red[300] }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
        alt="pokeball"
        style={{ width: 24, height: 24 }}
      />
    </Avatar>
  }
  title={pkmn.name.en}
  subheader={`#${pkmn.pokedex_id}`}
/>
      <CardMedia
        component="img"
        height="194"
        image={pkmn.sprites.regular}
        alt="pokemon image"
      />
      <CardContent>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {pkmn.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>  
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ArrowDropDownIcon />
        </ExpandMore>
        <IconButton  >

          <LaunchIcon onClick={handleModalOpen}/>
          <Button
  variant={isCaught ? 'outlined' : 'contained'}
  color={isCaught ? 'secondary' : 'primary'}
  onDoubleClick={navigate(`/pokemon/${pkmn.pokedex_id}`)}

  startIcon={<CatchingPokemonIcon />}
>
  {isCaught ? 'Libérer' : 'Attraper'}
</Button>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Type:</Typography>
          {pkmn.types?.map((type, idx) => (
            <Chip key={idx} label={type.name} avatar={<Avatar src={type.image} />} style={{ marginRight: 5 }} />
          ))}
          <Typography paragraph>Talents:</Typography>
            {pkmn.talents?.map((talent, idx) => (
                <Typography key={idx}>
                {talent.name} {talent.tc ? '(Talent caché)' : ''}
                </Typography>
            ))}
            <Typography paragraph>Stats:</Typography>
            <Typography>HP: {pkmn.stats?.hp || "unknown"}</Typography>
            <Typography>ATK: {pkmn.stats?.atk || "unknown"}</Typography>
            <Typography>DEF: {pkmn.stats?.def || "unknown"}</Typography>
            <Typography>SP. ATK: {pkmn.stats?.spe_atk || "unknown"}</Typography>
            <Typography>SP. DEF: {pkmn.stats?.spe_def || "unknown"}</Typography>
            <Typography>VIT: {pkmn.stats?.vit || "unknown"}</Typography>
            <Typography paragraph>Resistances:</Typography>
            {pkmn.resistances?.map((resistance, idx) => (
                <Typography key={idx}>
                {resistance.name}: {resistance.multiplier}x
                </Typography>
            ))}
            <Typography paragraph>Évolutions:</Typography>
            <Typography>Pré-évolution:</Typography>
            {pkmn.evolution?.pre?.map((pre, idx) => (
                <Typography key={idx}>
                #{pre.pokedex_id} - {pre.name} ({pre.condition})
                </Typography>
            ))}
            <Typography>Évolution suivante:</Typography>
            {pkmn.evolution?.next?.map((next, idx) => (
                <Typography key={idx}>
                #{next.pokedex_id} - {next.name} ({next.condition})
                </Typography>
            ))}
            <Typography paragraph>Génération:</Typography>
            <Typography>{pkmn.generation}</Typography>
            <Typography paragraph>Groupes d'oeufs:</Typography>
            {pkmn.egg_groups?.map((group, idx) => (
                <Typography key={idx}>
                {group}
                </Typography>
            ))}

        </CardContent>
      </Collapse>
      <PokemonModal open={modalOpen} onClose={handleModalClose} pokemon={pkmn} />
    </Card>    
    
    ); 
};
export default CardPokemon;
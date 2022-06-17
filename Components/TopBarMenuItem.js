export default function TopBarMenuItem(props) {
  return (
    <li className="md:float-right text-center py-1 md:px-2 md:hover:border-b-2 border-green-400/80 transition-all ease-linear">
      <a href={props.href} >{props.item}</a>
    </li>
  );
}

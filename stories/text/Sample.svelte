<script>
  import { Text } from 'sveltestrap';

  const text = [
    `My friends,`,
    `Choose Forbearance, Hardihood, Largesse, Benevolence, and Honour.`,
    `Restraint, Dignity, Nobility, Unbreakability, Fortitude, Courage, Love; and Insight; and Foresight; and Understanding; and Authenticity; and Heroism.`,
    `<a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR">47 Video YouTube Playlist</a>`,
  ];

</script>

<Text title="Choices" {text} class="shadow" style="max-width: 32rem;"/>

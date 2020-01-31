<script>
  import { Illustration } from 'sveltestrap';

  const text = [
    `This artwork has been with me for as long as I can remember,
    I found it in a book entitled
    &#x201C;Wszech&#x15B;wiat &#x17C;ycie cz&#x142;owiek&#x201D; (Universe, Life, Human).`
  ];

</script>

<Illustration title="The Bear Hunt" url="book-images/bears.jpg" {text} class="shadow" style="max-width: 32rem;">

  <p slot="body">
    My favorite writer Bill Bryson wrote something just as good
    <a href="https://en.wikipedia.org/wiki/A_Short_History_of_Nearly_Everything">A Short History of Nearly Everything</a>
    which is available as an <a href="https://www.audible.com/pd/A-Short-History-of-Nearly-Everything-Audiobook/B002V0KFPW">Audiobook</a>
    where he gently talks about learning, and what he learned about our universe.
  </p>

</Illustration>

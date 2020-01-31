import { storiesOf } from '@storybook/svelte';

import Alert from './alert/Index.svelte';
import Badge from './badge/Index.svelte';
import Breadcrumbs from './breadcrumb/Index.svelte';
import Button from './button/Index.svelte';
import Card from './card/Index.svelte';
import Carousel from './carousel/Index.svelte';
import Collapse from './collapse/Index.svelte';
import CustomInputs from './custominput/Index.svelte';
import Dropdown from './dropdown/Index.svelte';
import Fade from './fade/Index.svelte';
import InputGroup from './InputGroup.svelte';
import Inputs from './input/Index.svelte';
import ListGroup from './listgroup/Index.svelte';
import Jumbotron from './jumbotron/Index.svelte';
import Media from './media/Index.svelte';
import Modals from './modal/Index.svelte';
import Navbar from './navbar/Index.svelte';
import Nav from './nav/Index.svelte';
import Grid from './layout/Index.svelte';
import Pagination from './pagination/Index.svelte';
import Popover from './popover/Index.svelte';
import Progress from './progress/Index.svelte';
import Spinner from './spinner/Index.svelte';
import Tables from './table/Index.svelte';
import Toast from './toast/Index.svelte';
import Tooltip from './tooltip/Index.svelte';
import Welcome from './welcome/Index.svelte';

// Widgets
import Illustration from './illustration/Index.svelte';
import Business from './business/Index.svelte';
import Link from './link/Index.svelte';
import Poem from './poem/Index.svelte';
import Quote from './quote/Index.svelte';
import Text from './text/Index.svelte';
import Youtube from './youtube/Index.svelte';
import Subtitle from './subtitle/Index.svelte';









const story = Component => () => ({
  Component
});

  storiesOf('Introduction', module)
  .add('Get Started', story(Welcome))

  storiesOf('Components', module)
  .add('Layout', story(Grid))
  .add('Alert', story(Alert))
  .add('Badge', story(Badge))
  .add('Breadcrumb', story(Breadcrumbs))
  .add('Button', story(Button))
  .add('Card', story(Card))
  .add('Carousel', story(Carousel))
  .add('Collapse', story(Collapse))
  .add('Dropdown', story(Dropdown))
  .add('Fade', story(Fade))
  .add('Inputs', story(Inputs))
  .add('CustomInputs', story(CustomInputs))
  .add('InputGroup', story(InputGroup))
  .add('Jumbotron', story(Jumbotron))
  .add('ListGroup', story(ListGroup))
  .add('Media', story(Media))
  .add('Modals', story(Modals))
  .add('Nav', story(Nav))
  .add('Navbar', story(Navbar))
  .add('Pagination', story(Pagination))
  .add('Popover', story(Popover))
  .add('Progress', story(Progress))
  .add('Spinner', story(Spinner))
  .add('Table', story(Tables))
  .add('Toast', story(Toast))
  .add('Tooltip', story(Tooltip))

  storiesOf('Widgets', module)
  .add('Subtitle', story(Subtitle))
  .add('Text', story(Text))
  .add('Illustration', story(Illustration))
  .add('Youtube', story(Youtube))
  .add('Poem', story(Poem))
  .add('Quote', story(Quote))
  .add('Link', story(Link))
  .add('Business', story(Business))

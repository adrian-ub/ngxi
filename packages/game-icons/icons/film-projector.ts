import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsFilmProjectorIcon],svg[game-icons-film-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M266 51.727c-39.32 0-71 31.68-71 71s31.68 71.002 71 71.002s71-31.683 71-71.002c0-39.32-31.68-71-71-71m-144 32c-30.483 0-55 24.517-55 55c0 30.482 24.517 55.002 55 55.002s55-24.52 55-55.002s-24.517-55-55-55m-23 128v110.002h238V211.727zm350 4.648l-94 40.285v20.133l94 40.285zm-386 2.352v32h18v-32zm113 121.002v17.998h13.012l-51.123 136.275h19.222l51.507-136.275l.382 136.275h18l.382-136.275l51.507 136.275h19.222l-51.123-136.275H260v-17.998c-28.003-.003-55.997 0-84 0"></svg:path>`,
})
export class GameIconsFilmProjectorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

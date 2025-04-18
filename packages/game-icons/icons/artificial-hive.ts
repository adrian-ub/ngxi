import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsArtificialHiveIcon],svg[game-icons-artificial-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.313 23.844L49.438 140.25l-.376 233.5l202.625 116.406L453.563 373.75l.375-233.5zm-1.407 57.062l52.406 30.25v60.5l-52.406 30.25l-52.406-30.25v-60.5zm-105.344 60.47l52.407 30.25v60.5l-52.407 30.25l52.406 30.25v60.53l-52.407 30.25l-52.407-30.25v-60.53l52.406-30.25l-52.406-30.25v-60.5l52.406-30.25zm210.313 0l52.406 30.25v60.5l-52.405 30.25l52.406 30.25v60.53l-52.405 30.25l-52.406-30.25v-60.53l52.405-30.25l-52.406-30.25v-60.5zM249.905 202l52.407 30.25v60.5l-52.28 30.188l52.28 30.156v60.53l-52.406 30.25l-52.406-30.25v-60.53l52.28-30.156l-52.28-30.188v-60.5L249.906 202z"></svg:path>`,
})
export class GameIconsArtificialHiveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

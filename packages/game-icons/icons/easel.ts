import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsEaselIcon],svg[game-icons-easel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.5 22.5v52.8h25V22.5zm-14.6 67.1v19.5h54.2V89.6zm-57.7 34.1v202.2h169.4V123.7zm-21.6 219.6v21h212.8v-21zm21 35.3L144.2 485l24.3 6l27.8-112.4zm145.1 0L343.5 491l24.3-6l-26.4-106.4zm-67 2.5v70h16.7v-70z"></svg:path>`,
})
export class GameIconsEaselIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

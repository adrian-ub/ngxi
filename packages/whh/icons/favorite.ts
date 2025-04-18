import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFavoriteIcon],svg[whh-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1020 400L818 624l29 297q-3 20-19 31.5t-36 7.5L513 841L234 960q-20 4-36-8t-19-31l29-297L6 400q-9-17-2.5-36T27 336l298-64L479 14q14-14 34-14t34 14l154 258l298 64q17 9 23.5 28t-2.5 36"></svg:path>`,
})
export class WhhFavoriteIcon {
  readonly viewBox = input("0 0 1026 962")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

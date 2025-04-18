import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAnchorIcon],svg[twemoji-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#269" d="M30.5 18.572L26 25h2.575A11 11 0 0 1 20 32.81V17h3a2 2 0 0 0 0-4h-3v-1.349h-4V13h-3a2 2 0 0 0 0 4h3v15.81A11 11 0 0 1 7.425 25H10l-4.5-6.428L1 25h3.33C5.705 31.289 11.299 36 18 36s12.295-4.711 13.67-11H35z"></svg:path><svg:path fill="#269" d="M18 0a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class TwemojiAnchorIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

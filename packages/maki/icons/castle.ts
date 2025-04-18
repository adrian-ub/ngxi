import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCastleIcon],svg[maki-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4H4a1 1 0 0 1-1-1V.5a.5.5 0 0 1 1 0V2h1V1a1 1 0 1 1 2 0v1h1V1a1 1 0 1 1 2 0v1h1V.5a.5.5 0 0 1 1 0V3a1 1 0 0 1-1 1m3 10.5a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1H2a1 1 0 0 0 1-1s1-6 1-7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1c0 1 1 7 1 7a1 1 0 0 0 1 1h.5a.5.5 0 0 1 .5.49zm-5-4a1.5 1.5 0 0 0-3 0V14h3z"></svg:path>`,
})
export class MakiCastleIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

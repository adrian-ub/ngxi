import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCrownFIcon],svg[jam-crown-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.049 1.802L5.854 5.15L9.244.976a1 1 0 0 1 1.565.017l3.235 4.156l3.928-3.396a1 1 0 0 1 1.643.9L18.115 13H1.922L.399 2.7a1 1 0 0 1 1.65-.898M2 14h16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class JamCrownFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

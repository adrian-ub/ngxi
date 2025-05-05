import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconApartIcon],svg[picon-apart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v1H3v1L0 2.5L3 1v1m2 3H2v1h3v1l3-1.5L5 4"></svg:path>`,
})
export class PiconApartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

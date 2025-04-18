import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFaceFrownIcon],svg[charm-face-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="8" r="6.25"></svg:circle><svg:path d="M9.75 6.25v-.5m-3.5.5v-.5m-.5 5s.5-1 2.25-1s2.25 1 2.25 1"></svg:path></svg:g>`,
})
export class CharmFaceFrownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

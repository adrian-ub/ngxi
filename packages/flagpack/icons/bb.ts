import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBbIcon],svg[flagpack-bb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#2E42A5" d="M22 0h10v24H22z"></svg:path><svg:path fill="#FECA00" d="M10 0h12v24H10z"></svg:path><svg:path fill="#2E42A5" d="M0 0h10v24H0z"></svg:path><svg:path fill="#000" d="M18.612 15.668c.188-1.29 1.52-4.093 1.52-4.093l.619-1.644l-2.45.795l.58.301l-1.135 3.199l-.856-.205V7.853l.677-.05l-1.672-2.431l-1.632 2.48h.787v6.17l-.965.16l-.688-3.234l.397-.333l-2.665-.492l.796 1.469s1.07 2.516 1.472 4.076l1.653-.128v2.398h1.84V15.54z"></svg:path></svg:g>`,
})
export class FlagpackBbIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

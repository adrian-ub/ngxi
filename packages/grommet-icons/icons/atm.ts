import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAtmIcon],svg[grommet-icons-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 10H1V6h22v4h-3M6 6h12v14.006A2.003 2.003 0 0 1 15.991 22H8.01A2 2 0 0 1 6 20.006zm7 12h3m-3-3h3m-3-3h3m-6 10V6M3 2h3m2 0h3m2 0h3m2 0h3"></svg:path>`,
})
export class GrommetIconsAtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

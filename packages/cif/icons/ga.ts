import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifGaIcon],svg[cif-ga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3A75C4" d="M.5 0h300v225H.5z"></svg:path><svg:path fill="#FCD116" d="M.5 0h300v150H.5z"></svg:path><svg:path fill="#009E60" d="M.5 0h300v75H.5z"></svg:path></svg:g>`,
})
export class CifGaIcon {
  readonly viewBox = input("0 0 301 225")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifYeIcon],svg[cif-ye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M0 0h300v200H0z"></svg:path><svg:path fill="#CE1126" d="M0 0h300v66.667H0z"></svg:path><svg:path fill="#000" d="M0 133.333h300V200H0z"></svg:path></svg:g>`,
})
export class CifYeIcon {
  readonly viewBox = input("0 0 300 200")
  readonly width = input("1.5em")
  readonly height = input("1em")
}

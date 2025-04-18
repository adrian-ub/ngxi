import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifMcIcon],svg[cif-mc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CE1126" d="M.5.5h300v120H.5z"></svg:path><svg:path fill="#FFF" d="M.5 120.5h300v120H.5z"></svg:path></svg:g>`,
})
export class CifMcIcon {
  readonly viewBox = input("0 0 301 241")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

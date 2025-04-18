import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifIdIcon],svg[cif-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CE1126" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FFF" d="M.5 100.5h300v100H.5z"></svg:path></svg:g>`,
})
export class CifIdIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}

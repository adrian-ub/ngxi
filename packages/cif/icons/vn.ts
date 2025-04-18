import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifVnIcon],svg[cif-vn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#DA251D" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FF0" d="m102.168 83.815l26.481 19.24l-10.115 31.131l26.482-19.239l26.481 19.239l-10.115-31.131l26.482-19.24h-32.841l-10.007-30.798l-10.007 30.798z"></svg:path></svg:g>`,
})
export class CifVnIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}

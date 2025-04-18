import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifKwIcon],svg[cif-kw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#007A3D" d="M.5.5h300v50H.5z"></svg:path><svg:path fill="#FFF" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#CE1126" d="M.5 100.5h300v50H.5z"></svg:path><svg:path fill="#000" d="m.5.5l75 50v50l-75 50z"></svg:path></svg:g>`,
})
export class CifKwIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}

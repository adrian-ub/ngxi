import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifHuIcon],svg[cif-hu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CE1126" d="M.5.5h300v50H.5z"></svg:path><svg:path fill="#FFF" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#008751" d="M.5 100.5h300v50H.5z"></svg:path></svg:g>`,
})
export class CifHuIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}

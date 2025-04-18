import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifLuIcon],svg[cif-lu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A1DE" d="M.5 90.5h300v90H.5z"></svg:path><svg:path fill="#ED2939" d="M.5.5h300v90H.5z"></svg:path><svg:path fill="#FFF" d="M.5 60.5h300v60H.5z"></svg:path></svg:g>`,
})
export class CifLuIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

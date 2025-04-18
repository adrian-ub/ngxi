import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifLtIcon],svg[cif-lt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FDB913" d="M.5.5h300v180H.5z"></svg:path><svg:path fill="#C1272D" d="M.5 90.5h300v90H.5z"></svg:path><svg:path fill="#006A44" d="M.5 60.5h300v60H.5z"></svg:path></svg:g>`,
})
export class CifLtIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

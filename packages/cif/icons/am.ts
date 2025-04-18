import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifAmIcon],svg[cif-am-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D90012" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#0033A0" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#F2A800" d="M.5 100.5h300v50H.5z"></svg:path></svg:g>`,
})
export class CifAmIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}

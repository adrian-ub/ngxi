import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBsIcon],svg[cif-bs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00ABC9" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FAE042" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#000" d="M.5.5v150l125-75z"></svg:path></svg:g>`,
})
export class CifBsIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}

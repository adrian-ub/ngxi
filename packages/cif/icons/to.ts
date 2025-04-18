import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifToIcon],svg[cif-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C10000" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#FFF" d="M.5.5h125v75H.5z"></svg:path><svg:path fill="#C10000" d="M53.625 9.875h18.75v56.25h-18.75z"></svg:path><svg:path fill="#C10000" d="M34.875 28.625h56.25v18.75h-56.25z"></svg:path></svg:g>`,
})
export class CifToIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCiIcon],svg[cif-ci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#F77F00" d="M.5.5h100v200H.5z"></svg:path><svg:path fill="#009E60" d="M200.5.5h100v200h-100z"></svg:path></svg:g>`,
})
export class CifCiIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}

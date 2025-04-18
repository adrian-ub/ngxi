import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBeIcon],svg[cif-be-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M.5.5h300v260H.5z"></svg:path><svg:path fill="#FAE042" d="M100.5.5h100v260h-100z"></svg:path><svg:path fill="#ED2939" d="M200.5.5h100v260h-100z"></svg:path></svg:g>`,
})
export class CifBeIcon {
  readonly viewBox = input("0 0 301 261")
  readonly width = input("1.16em")
  readonly height = input("1em")
}

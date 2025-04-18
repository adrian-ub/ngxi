import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifAzIcon],svg[cif-az-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0098C3" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#E00034" d="M.5 50.5h300v50H.5z"></svg:path><svg:path fill="#00AE65" d="M.5 100.5h300v50H.5z"></svg:path><svg:circle cx="145.75" cy="75.5" r="22.5" fill="#FFF"></svg:circle><svg:circle cx="150.5" cy="75.5" r="18.75" fill="#E00034"></svg:circle><svg:path fill="#FFF" d="m179.595 84.333l-6.449-3.06L170.759 88l-2.396-6.724l-6.445 3.069l3.06-6.449l-6.727-2.387l6.724-2.396l-3.069-6.445l6.449 3.06L170.742 63l2.396 6.724l6.445-3.069l-3.06 6.449l6.728 2.387l-6.724 2.396z"></svg:path></svg:g>`,
})
export class CifAzIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBeIcon],svg[flagpack-be-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FECA00" d="M10 0h11v24H10z"></svg:path><svg:path fill="#E31D1C" d="M21 0h11v24H21z"></svg:path><svg:path fill="#1D1D1D" d="M0 0h11v24H0z"></svg:path></svg:g>`,
})
export class FlagpackBeIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

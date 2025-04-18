import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackIeIcon],svg[flagpack-ie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FF8C1A" d="M22 0h10v24H22z"></svg:path><svg:path fill="#5EAA22" d="M0 0h12v24H0z"></svg:path><svg:path fill="#F7FCFF" d="M10 0h12v24H10z"></svg:path></svg:g>`,
})
export class FlagpackIeIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

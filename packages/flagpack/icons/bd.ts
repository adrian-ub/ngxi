import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBdIcon],svg[flagpack-bd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#38A17E" d="M0 0h32v24H0z"></svg:path><svg:path fill="#F72E45" fill-rule="evenodd" d="M13 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackBdIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

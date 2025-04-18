import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBhIcon],svg[flagpack-bh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E31D1C" d="M0 0h32v24H0z"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0h6.8L12 2L6.8 4L12 6L6.8 8l5.2 2l-5.2 2l5.2 2l-5.2 2l5.2 2l-5.2 2l5.2 2l-5.2 2H0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackBhIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

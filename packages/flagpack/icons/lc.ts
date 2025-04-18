import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackLcIcon],svg[flagpack-lc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#7CCFF5" d="M0 0h32v24H0z"></svg:path><svg:path fill="#F7FCFF" d="m16 4l8 16H8z"></svg:path><svg:path fill="#272727" d="m16 8l7 12H9z"></svg:path><svg:path fill="#FECA00" d="m16 14l8 6H8z"></svg:path></svg:g>`,
})
export class FlagpackLcIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

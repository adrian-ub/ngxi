import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp11mpIcon],svg[ic-sharp-11mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm5 2.5h3v6H9.5V7H8zm4.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp11mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

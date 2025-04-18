import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp21mpIcon],svg[ic-sharp-21mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm4.5 5h3V7h-3V5.5H12V9H9v1h3v1.5H7.5zm5 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h3v6h-1.5V7H13zM18 17h-3v1.5h-1.5v-6H18z"></svg:path>`,
})
export class IcSharp21mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

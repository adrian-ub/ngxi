import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp24mpIcon],svg[ic-sharp-24mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18zm.5-7h-1v1.5H16V10h-3V5.5h1.5v3H16v-3h1.5v3h1z"></svg:path>`,
})
export class IcSharp24mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

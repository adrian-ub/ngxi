import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp9mpIcon],svg[ic-sharp-9mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm7 7h3V9h-3V5.5h4.5v6H10zm2.5 8.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M11.5 6.5H13V8h-1.5z"></svg:path>`,
})
export class IcSharp9mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

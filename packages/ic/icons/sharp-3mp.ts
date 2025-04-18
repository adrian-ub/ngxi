import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp3mpIcon],svg[ic-sharp-3mp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM10 10h3V9h-2V8h2V7h-3V5.5h4.5v6H10zm8 7h-3v1.5h-1.5v-6H18z"></svg:path><svg:path fill="currentColor" d="M15 14h1.5v1.5H15z"></svg:path>`,
})
export class IcSharp3mpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

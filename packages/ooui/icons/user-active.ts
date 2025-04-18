import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUserActiveIcon],svg[ooui-user-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"></svg:path><svg:circle cx="10" cy="6" r="5" fill="currentColor"></svg:circle>`,
})
export class OouiUserActiveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

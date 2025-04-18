import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiUserAvatarIcon],svg[ooui-user-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"></svg:path><svg:circle cx="10" cy="5.5" r="4.5" fill="currentColor"></svg:circle>`,
})
export class OouiUserAvatarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

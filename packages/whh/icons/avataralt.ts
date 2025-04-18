import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAvataraltIcon],svg[whh-avataralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024v-64q0-62-24-109t-68.5-76.5t-101-46.5t-126.5-22v-16q81-34 136.5-137.5t55.5-215.5q0-103-71.5-156t-184.5-53t-184.5 53t-71.5 156q0 109 57 212t135 139v18q-70 5-126.5 22t-101 46.5t-68.5 76.5t-24 109v64q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhAvataraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

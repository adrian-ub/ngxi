import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faXingIcon],svg[fa-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M597 667q-10 18-257 456q-27 46-65 46H36q-21 0-31-17t0-36l253-448q1 0 0-1L97 388q-12-22-1-37q9-15 32-15h239q40 0 66 45zm806-642q11 16 0 37L875 996v1l336 615q11 20 1 37q-10 15-32 15H941q-42 0-66-45L536 997q18-32 531-942q25-45 64-45h241q22 0 31 15"></svg:path>`,
})
export class FaXingIcon {
  readonly viewBox = input("0 0 1408 1664")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

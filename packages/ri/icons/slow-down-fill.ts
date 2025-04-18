import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSlowDownFillIcon],svg[ri-slow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13c0 2.21.895 4.21 2.343 5.657L4.93 20.07A9.97 9.97 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A8 8 0 1 0 4 13m4.707-4.707L13.5 12.5l-2 2l-4.207-4.793z"></svg:path>`,
})
export class RiSlowDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

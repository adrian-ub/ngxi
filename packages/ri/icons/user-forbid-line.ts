import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUserForbidLineIcon],svg[ri-user-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m3 17a3 3 0 0 1 4.293-2.708l-4 4.001A3 3 0 0 1 15 18m1.707 2.708l4-4.001a3 3 0 0 1-4.001 4.001M18 13a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6 1q.126 0 .252.004a7 7 0 0 0-.975 2.04A6 6 0 0 0 6 22H4a8 8 0 0 1 8-8"></svg:path>`,
})
export class RiUserForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

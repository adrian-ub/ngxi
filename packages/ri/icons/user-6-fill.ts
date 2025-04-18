import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUser6FillIcon],svg[ri-user-6-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.848 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17m0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5"></svg:path>`,
})
export class RiUser6FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

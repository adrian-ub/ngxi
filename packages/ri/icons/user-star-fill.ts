import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUserStarFillIcon],svg[ri-user-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v8H4a8 8 0 0 1 8-8m6 7.5l-2.939 1.545l.561-3.273l-2.377-2.317l3.286-.477L18 14l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6"></svg:path>`,
})
export class RiUserStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

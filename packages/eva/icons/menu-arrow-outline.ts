import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaMenuArrowOutlineIcon],svg[eva-menu-arrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1"></svg:path><svg:rect width="18" height="2" x="3" y="17" fill="currentColor" rx=".95" ry=".95"></svg:rect><svg:rect width="18" height="2" x="3" y="5" fill="currentColor" rx=".95" ry=".95"></svg:rect>`,
})
export class EvaMenuArrowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaMenuOutlineIcon],svg[eva-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18" height="2" x="3" y="11" fill="currentColor" rx=".95" ry=".95"></svg:rect><svg:rect width="18" height="2" x="3" y="16" fill="currentColor" rx=".95" ry=".95"></svg:rect><svg:rect width="18" height="2" x="3" y="6" fill="currentColor" rx=".95" ry=".95"></svg:rect>`,
})
export class EvaMenuOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

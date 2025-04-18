import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiArrowBottomIcon],svg[oi-arrow-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v5H1l2.53 3L6 5H4V0z"></svg:path>`,
})
export class OiArrowBottomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

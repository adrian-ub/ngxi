import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feUserMinusIcon],svg[fe-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15m0-3a4 4 0 1 1 0-8a4 4 0 0 1 0 8m5 2a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"></svg:path>`,
})
export class FeUserMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

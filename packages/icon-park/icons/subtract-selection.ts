import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSubtractSelectionIcon],svg[icon-park-subtract-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="27" height="27" x="16" y="16" rx="2"></svg:rect><svg:path d="M16 32H7C5.89543 32 5 31.1046 5 30V7C5 5.89543 5.89543 5 7 5H30C31.1046 5 32 5.89543 32 7V16"></svg:path><svg:path d="M29 16L16 30"></svg:path><svg:path d="M38 16L16 40"></svg:path><svg:path d="M43 21L23 43"></svg:path><svg:path d="M43 32L33 43"></svg:path></svg:g>`,
})
export class IconParkSubtractSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

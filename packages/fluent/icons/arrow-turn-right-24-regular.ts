import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRight24RegularIcon],svg[fluent-arrow-turn-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.28 3.22a.75.75 0 0 0-1.06 1.06l3.22 3.22h-7.69a4.25 4.25 0 0 0-4.25 4.25V20A.75.75 0 0 0 8 20v-8.25A2.75 2.75 0 0 1 10.75 9h7.689l-3.22 3.22a.75.75 0 0 0 1.061 1.06l4.5-4.5a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentArrowTurnRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

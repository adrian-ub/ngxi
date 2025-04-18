import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGreaterThanOrEqualIcon],svg[tdesign-greater-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.435 1.704l17.3 6.796l-17.3 6.796l-.731-1.861L16.265 8.5L3.704 3.565zM3 19h18v2H3z"></svg:path>`,
})
export class TdesignGreaterThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

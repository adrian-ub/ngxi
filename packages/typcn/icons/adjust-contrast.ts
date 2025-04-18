import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnAdjustContrastIcon],svg[typcn-adjust-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 14a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-11v10c2.757 0 5-2.243 5-5s-2.243-5-5-5"></svg:path>`,
})
export class TypcnAdjustContrastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

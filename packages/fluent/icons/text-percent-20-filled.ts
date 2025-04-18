import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPercent20FilledIcon],svg[fluent-text-percent-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.636 3.128a.75.75 0 0 1 .203 1.041L6.406 16.671a.75.75 0 1 1-1.243-.839l8.432-12.501a.75.75 0 0 1 1.041-.203M5.75 4.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M2.5 6.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m10 7.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m1.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"></svg:path>`,
})
export class FluentTextPercent20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocation48FilledIcon],svg[fluent-location-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.015 28.98A16.9 16.9 0 0 0 41 21c0-9.389-7.611-17-17-17S7 11.611 7 21a16.92 16.92 0 0 0 4 10.955l.02.025l.018.02H11l10.088 10.71a4 4 0 0 0 5.823 0L37 32h-.038l.016-.019l.002-.002q.108-.129.215-.26a17 17 0 0 0 1.82-2.74m-15.01-1.48a6 6 0 1 1 0-12a6 6 0 0 1 0 12"></svg:path>`,
})
export class FluentLocation48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

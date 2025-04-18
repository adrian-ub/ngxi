import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableOffsetLessThanOrEqualTo20FilledIcon],svg[fluent-table-offset-less-than-or-equal-to-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3H12v4H3V5.5A2.5 2.5 0 0 1 5.5 3M8 8h9v1.6A5.5 5.5 0 0 0 9.6 12H8zm1 6.5a5.5 5.5 0 0 1 .207-1.5H3v1.5A2.5 2.5 0 0 0 5.5 17h4.1a5.5 5.5 0 0 1-.6-2.5M7 12V8H3v4zm6-5h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm1.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M13 16h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m2.4-4.8a.5.5 0 0 1-.1.7L13.833 13l1.467 1.1a.5.5 0 0 1-.6.8l-2-1.5a.5.5 0 0 1 0-.8l2-1.5a.5.5 0 0 1 .7.1"></svg:path>`,
})
export class FluentTableOffsetLessThanOrEqualTo20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

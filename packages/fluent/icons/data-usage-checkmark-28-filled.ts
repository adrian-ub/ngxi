import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataUsageCheckmark28FilledIcon],svg[fluent-data-usage-checkmark-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 2A3.75 3.75 0 0 0 2 5.75v14.5A3.75 3.75 0 0 0 5.75 24h8.115a7.54 7.54 0 0 1-.712-5.016a.75.75 0 0 1-.903-.734v-4.5a.75.75 0 0 1 1.5 0v3.477a7.53 7.53 0 0 1 3.75-3.603V7.75a.75.75 0 0 1 1.5 0v5.4a7.53 7.53 0 0 1 5 .715V5.75A3.75 3.75 0 0 0 20.25 2zm2.75 8.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-2.646-2.854a.5.5 0 0 0-.708 0L19 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentDataUsageCheckmark28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

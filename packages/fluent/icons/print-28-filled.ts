import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPrint28FilledIcon],svg[fluent-print-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.004 5.765V7H6a4 4 0 0 0-4 4v7a3 3 0 0 0 3 3h2v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-4-4h-1V5.752a2.75 2.75 0 0 0-2.754-2.75l-8.496.013a2.75 2.75 0 0 0-2.746 2.75M19.5 5.752V7H8.504V5.765c0-.69.558-1.249 1.248-1.25l8.496-.013a1.25 1.25 0 0 1 1.252 1.25M10 15.5h8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 8.5 22v-5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class FluentPrint28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

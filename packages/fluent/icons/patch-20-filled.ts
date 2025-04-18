import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPatch20FilledIcon],svg[fluent-patch-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.267 3.06l1.026 1.025l-5.208 5.208L3.06 8.267a2.5 2.5 0 0 1 0-3.535L4.732 3.06a2.5 2.5 0 0 1 3.535 0m3.465 13.879l-1.025-1.025l5.207-5.207l1.025 1.025a2.5 2.5 0 0 1 0 3.536l-1.671 1.671a2.5 2.5 0 0 1-3.536 0M3.06 11.732a2.5 2.5 0 0 0 0 3.536l1.671 1.671a2.5 2.5 0 0 0 3.536 0l8.671-8.672a2.5 2.5 0 0 0 0-3.535l-1.67-1.672a2.5 2.5 0 0 0-3.536 0zM10 8.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M8.5 10a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m3.5.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M10.5 12a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentPatch20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

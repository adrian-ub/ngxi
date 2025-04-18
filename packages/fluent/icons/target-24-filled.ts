import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTarget24FilledIcon],svg[fluent-target-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6-2a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></svg:path>`,
})
export class FluentTarget24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

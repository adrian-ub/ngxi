import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRecord24FilledIcon],svg[fluent-record-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10 6a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path>`,
})
export class FluentRecord24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

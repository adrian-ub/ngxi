import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClover16FilledIcon],svg[fluent-clover-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1a3 3 0 1 1 0 6H8.5a.5.5 0 0 1-.5-.5V4a3 3 0 0 1 3-3m-7 .02a3 3 0 1 0 0 6h2.5a.5.5 0 0 0 .5-.5v-2.5a3 3 0 0 0-3-3M4 14a3 3 0 1 1 0-6h2.5a.5.5 0 0 1 .5.5V11a3 3 0 0 1-3 3m7 0a3 3 0 1 0 0-6H8.5a.5.5 0 0 0-.5.5V11a3 3 0 0 0 3 3"></svg:path>`,
})
export class FluentClover16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

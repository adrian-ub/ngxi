import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonXAxisIcon],svg[carbon-x-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 20l-1.414 1.414L24.172 24H6V4H4v20a2 2 0 0 0 2 2h18.172l-2.586 2.586L23 30l5-5Z"></svg:path>`,
})
export class CarbonXAxisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

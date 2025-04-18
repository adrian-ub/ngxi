import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowsBidirectional24FilledIcon],svg[fluent-arrows-bidirectional-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.002 8.999H9.005v-2.25a.75.75 0 0 0-1.267-.542l-5.504 5.25a.75.75 0 0 0 0 1.086l5.504 5.25l.082.068a.75.75 0 0 0 1.186-.611L9.005 15h5.997v2.25a.75.75 0 0 0 1.268.542l5.497-5.25a.75.75 0 0 0 0-1.085l-5.497-5.25a.75.75 0 0 0-1.268.543z"></svg:path>`,
})
export class FluentArrowsBidirectional24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

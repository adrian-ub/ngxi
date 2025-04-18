import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise48RegularIcon],svg[fluent-arrow-clockwise-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 24c0-8.56 6.94-15.5 15.5-15.5c4.509 0 8.568 1.924 11.402 5H31.25a1.25 1.25 0 1 0 0 2.5h6.5c.69 0 1.25-.56 1.25-1.25v-6.5a1.25 1.25 0 1 0-2.5 0v2.798A17.94 17.94 0 0 0 24 6C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18q-.002-1.506-.24-2.95a1.25 1.25 0 0 0-2.467.408q.206 1.24.207 2.542c0 8.56-6.94 15.5-15.5 15.5S8.5 32.56 8.5 24"></svg:path>`,
})
export class FluentArrowClockwise48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

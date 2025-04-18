import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCounterclockwise48RegularIcon],svg[fluent-arrow-counterclockwise-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.5 24c0-8.56-6.94-15.5-15.5-15.5a15.46 15.46 0 0 0-11.402 5h4.152a1.25 1.25 0 1 1 0 2.5h-6.5C9.56 16 9 15.44 9 14.75v-6.5a1.25 1.25 0 1 1 2.5 0v2.798A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18s-8.059 18-18 18S6 33.941 6 24q.002-1.506.24-2.95a1.25 1.25 0 0 1 2.467.408A15.6 15.6 0 0 0 8.5 24c0 8.56 6.94 15.5 15.5 15.5S39.5 32.56 39.5 24"></svg:path>`,
})
export class FluentArrowCounterclockwise48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleRight48RegularIcon],svg[fluent-chevron-circle-right-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 41.5c-9.665 0-17.5-7.835-17.5-17.5S14.335 6.5 24 6.5S41.5 14.335 41.5 24S33.665 41.5 24 41.5M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4S4 12.954 4 24m16.366 8.616a1.25 1.25 0 0 0 1.768 1.768l9.5-9.5a1.25 1.25 0 0 0 0-1.768l-9.5-9.5a1.25 1.25 0 0 0-1.768 1.768L28.982 24z"></svg:path>`,
})
export class FluentChevronCircleRight48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

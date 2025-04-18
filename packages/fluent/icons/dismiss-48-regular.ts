import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismiss48RegularIcon],svg[fluent-dismiss-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.384 6.616a1.25 1.25 0 1 0-1.768 1.768L22.232 24L6.616 39.616a1.25 1.25 0 0 0 1.768 1.768L24 25.768l15.615 15.615a1.25 1.25 0 1 0 1.768-1.768L25.768 24L41.383 8.384a1.25 1.25 0 1 0-1.767-1.767L24 22.232z"></svg:path>`,
})
export class FluentDismiss48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

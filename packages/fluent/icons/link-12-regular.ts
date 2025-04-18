import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLink12RegularIcon],svg[fluent-link-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.4A2.4 2.4 0 0 1 4.4 3h.1a.5.5 0 0 1 0 1h-.1A1.4 1.4 0 0 0 3 5.4v.2A1.4 1.4 0 0 0 4.4 7h.1a.5.5 0 0 1 0 1h-.1A2.4 2.4 0 0 1 2 5.6zm8 0A2.4 2.4 0 0 0 7.6 3h-.1a.5.5 0 0 0 0 1h.1A1.4 1.4 0 0 1 9 5.4v.2A1.4 1.4 0 0 1 7.6 7h-.1a.5.5 0 0 0 0 1h.1A2.4 2.4 0 0 0 10 5.6zM4.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentLink12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

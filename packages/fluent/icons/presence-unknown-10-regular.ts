import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceUnknown10RegularIcon],svg[fluent-presence-unknown-10-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.999 1a3.999 3.999 0 1 0 0 7.997a3.999 3.999 0 0 0 0-7.997M0 4.999a4.999 4.999 0 1 1 9.997 0a4.999 4.999 0 0 1-9.997 0"></svg:path>`,
})
export class FluentPresenceUnknown10RegularIcon {
  readonly viewBox = input("0 0 10 10")
  readonly width = input("1em")
  readonly height = input("1em")
}

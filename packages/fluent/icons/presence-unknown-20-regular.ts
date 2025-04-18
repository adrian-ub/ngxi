import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceUnknown20RegularIcon],svg[fluent-presence-unknown-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.997 2a7.997 7.997 0 1 0 0 15.995A7.997 7.997 0 0 0 9.997 2M0 9.997C0 4.476 4.476 0 9.997 0c5.522 0 9.998 4.476 9.998 9.997c0 5.522-4.476 9.998-9.998 9.998S0 15.519 0 9.997"></svg:path>`,
})
export class FluentPresenceUnknown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

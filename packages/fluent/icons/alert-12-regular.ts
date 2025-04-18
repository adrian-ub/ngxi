import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlert12RegularIcon],svg[fluent-alert-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v1.5a.5.5 0 0 1-.053.224L2.31 8h7.382l-.638-1.276A.5.5 0 0 1 9 6.5V5a3 3 0 0 0-6 0m1 4H1.5a.5.5 0 0 1-.447-.724L2 6.382V5a4 4 0 1 1 8 0v1.382l.947 1.894A.5.5 0 0 1 10.5 9H8a2 2 0 1 1-4 0m3 0H5a1 1 0 0 0 2 0"></svg:path>`,
})
export class FluentAlert12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

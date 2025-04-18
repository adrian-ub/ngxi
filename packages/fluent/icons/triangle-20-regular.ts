import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangle20RegularIcon],svg[fluent-triangle-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.502 18a1.5 1.5 0 0 1-1.326-2.2l7.395-14C9.13.74 10.644.731 11.216 1.783l7.6 14.002A1.5 1.5 0 0 1 17.497 18zm-.442-1.733a.5.5 0 0 0 .442.733h14.995a.5.5 0 0 0 .44-.738l-7.6-14.001a.5.5 0 0 0-.882.005z"></svg:path>`,
})
export class FluentTriangle20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

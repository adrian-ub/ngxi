import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleDown48RegularIcon],svg[fluent-triangle-down-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.241 39.566c.652 1.238 2.422 1.248 3.088.017l15.954-29.501a1.75 1.75 0 0 0-1.54-2.583H8.256a1.75 1.75 0 0 0-1.549 2.565zm5.287 1.206c-1.617 2.99-5.915 2.966-7.499-.041L4.495 11.229C3.005 8.4 5.057 5 8.255 5h31.488c3.22 0 5.27 3.44 3.739 6.272z"></svg:path>`,
})
export class FluentTriangleDown48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

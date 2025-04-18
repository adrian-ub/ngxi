import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleDown12RegularIcon],svg[fluent-triangle-down-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.786 10.541a.903.903 0 0 1-1.572 0L1.122 3.372C.774 2.762 1.211 2 1.91 2h8.182c.698 0 1.135.762.787 1.372zM6 9.881l3.917-6.864H2.083z"></svg:path>`,
})
export class FluentTriangleDown12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

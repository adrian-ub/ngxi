import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleDown24RegularIcon],svg[fluent-triangle-down-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.302 6.37C1.442 4.87 2.524 3 4.253 3h15.49c1.729 0 2.812 1.87 1.951 3.37L13.95 19.871c-.865 1.507-3.04 1.507-3.904 0zM4.253 4.5a.75.75 0 0 0-.65 1.123l7.744 13.502a.75.75 0 0 0 1.301 0l7.745-13.502a.75.75 0 0 0-.65-1.123z"></svg:path>`,
})
export class FluentTriangleDown24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

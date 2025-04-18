import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleDown20RegularIcon],svg[fluent-triangle-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.682 17.215c.567 1.047 2.07 1.047 2.637 0l6.5-12A1.5 1.5 0 0 0 16.5 3.003H3.501a1.5 1.5 0 0 0-1.319 2.214zm1.758-.477a.5.5 0 0 1-.879 0L3.061 4.74a.5.5 0 0 1 .44-.74H16.5a.5.5 0 0 1 .44.739z"></svg:path>`,
})
export class FluentTriangleDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

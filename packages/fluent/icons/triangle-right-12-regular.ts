import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleRight12RegularIcon],svg[fluent-triangle-right-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.541 5.214a.903.903 0 0 1 0 1.572l-7.169 4.092C2.762 11.226 2 10.789 2 10.09V1.91c0-.698.762-1.135 1.372-.787zM9.881 6L3.017 2.083v7.834z"></svg:path>`,
})
export class FluentTriangleRight12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

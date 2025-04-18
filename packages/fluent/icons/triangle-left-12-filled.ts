import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleLeft12FilledIcon],svg[fluent-triangle-left-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.459 5.214a.903.903 0 0 0 0 1.572l7.169 4.092c.61.348 1.372-.089 1.372-.787V1.91c0-.698-.762-1.135-1.372-.787z"></svg:path>`,
})
export class FluentTriangleLeft12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

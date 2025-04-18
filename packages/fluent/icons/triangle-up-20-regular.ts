import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleUp20RegularIcon],svg[fluent-triangle-up-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.682 2.785c.567-1.047 2.07-1.047 2.637 0l6.5 12a1.5 1.5 0 0 1-1.319 2.214H3.501a1.5 1.5 0 0 1-1.319-2.215zm1.758.477a.5.5 0 0 0-.879 0l-6.5 11.998a.5.5 0 0 0 .44.739H16.5a.5.5 0 0 0 .44-.739z"></svg:path>`,
})
export class FluentTriangleUp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

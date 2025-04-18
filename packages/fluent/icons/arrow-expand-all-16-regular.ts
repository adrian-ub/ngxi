import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExpandAll16RegularIcon],svg[fluent-arrow-expand-all-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m3.854 9.354l2-2a.5.5 0 0 0-.708-.708L5 11.293V6.5a.5.5 0 0 0-1 0v4.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0M8.5 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentArrowExpandAll16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

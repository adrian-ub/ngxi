import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleDown20FilledIcon],svg[fluent-triangle-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.32 17.215c-.568 1.047-2.071 1.047-2.638 0l-6.5-12a1.5 1.5 0 0 1 1.32-2.213H16.5a1.5 1.5 0 0 1 1.319 2.214z"></svg:path>`,
})
export class FluentTriangleDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowFour16RegularIcon],svg[fluent-layout-row-four-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5zM11.5 3A1.5 1.5 0 0 1 13 4.5H3A1.5 1.5 0 0 1 4.5 3zM3 8.5h10v2H3zm0-1v-2h10v2zM4.5 13A1.5 1.5 0 0 1 3 11.5h10a1.5 1.5 0 0 1-1.5 1.5z"></svg:path>`,
})
export class FluentLayoutRowFour16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

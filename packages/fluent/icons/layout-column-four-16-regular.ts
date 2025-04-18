import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnFour16RegularIcon],svg[fluent-layout-column-four-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3v10A1.5 1.5 0 0 1 3 11.5zM8.5 13V3h2v10zm-1 0h-2V3h2zm5.5-1.5a1.5 1.5 0 0 1-1.5 1.5V3A1.5 1.5 0 0 1 13 4.5z"></svg:path>`,
})
export class FluentLayoutColumnFour16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

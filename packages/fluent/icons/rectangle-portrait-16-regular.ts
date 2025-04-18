import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectanglePortrait16RegularIcon],svg[fluent-rectangle-portrait-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 15A2.5 2.5 0 0 1 3 12.5v-9A2.5 2.5 0 0 1 5.5 1h5A2.5 2.5 0 0 1 13 3.5v9a2.5 2.5 0 0 1-2.5 2.5zM4 12.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 2h-5A1.5 1.5 0 0 0 4 3.5z"></svg:path>`,
})
export class FluentRectanglePortrait16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

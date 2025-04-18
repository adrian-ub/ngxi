import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectanglePortrait32RegularIcon],svg[fluent-rectangle-portrait-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 30A4.5 4.5 0 0 1 4 25.5v-19A4.5 4.5 0 0 1 8.5 2h15A4.5 4.5 0 0 1 28 6.5v19a4.5 4.5 0 0 1-4.5 4.5zM6 25.5A2.5 2.5 0 0 0 8.5 28h15a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 23.5 4h-15A2.5 2.5 0 0 0 6 6.5z"></svg:path>`,
})
export class FluentRectanglePortrait32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

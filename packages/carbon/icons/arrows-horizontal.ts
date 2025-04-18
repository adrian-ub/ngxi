import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrowsHorizontalIcon],svg[carbon-arrows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.41 26.59L7.83 23H28v-2H7.83l3.58-3.59L10 16l-6 6l6 6zM28 10l-6-6l-1.41 1.41L24.17 9H4v2h20.17l-3.58 3.59L22 16z"></svg:path>`,
})
export class CarbonArrowsHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

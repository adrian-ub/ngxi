import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzleCube20RegularIcon],svg[fluent-puzzle-cube-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14.5V7h4V3h7.5A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5M8 4v3h4V4zm5 0v3h3V5.5A1.5 1.5 0 0 0 14.5 4zm3 4h-3v4h3zm0 5h-3v3h1.5a1.5 1.5 0 0 0 1.5-1.5zm-4 3v-3H8v3zm-5 0v-3H4v1.5A1.5 1.5 0 0 0 5.5 16zm-3-4h3V8H4zm8-4H8v4h4z"></svg:path>`,
})
export class FluentPuzzleCube20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

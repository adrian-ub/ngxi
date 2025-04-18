import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineDashes48RegularIcon],svg[fluent-line-dashes-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.631 6.137a1.25 1.25 0 1 0-1.767-1.768l-2.498 2.497a1.25 1.25 0 0 0 1.768 1.768zm-7.997 6.23a1.25 1.25 0 0 1 0 1.767l-3.5 3.5a1.25 1.25 0 0 1-1.768-1.768l3.5-3.5a1.25 1.25 0 0 1 1.768 0m-9 10.767a1.25 1.25 0 0 0-1.768-1.768l-3.5 3.5a1.25 1.25 0 0 0 1.768 1.768zm-9 7.232a1.25 1.25 0 0 1 0 1.768l-3.5 3.5a1.25 1.25 0 0 1-1.768-1.768l3.5-3.5a1.25 1.25 0 0 1 1.768 0m-9 9a1.25 1.25 0 0 1 0 1.768L6.137 43.63a1.25 1.25 0 0 1-1.768-1.767l2.497-2.498a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentLineDashes48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

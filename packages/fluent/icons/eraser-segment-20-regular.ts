import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEraserSegment20RegularIcon],svg[fluent-eraser-segment-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.318 2.44a1.5 1.5 0 0 0-2.121 0l-8.76 8.759a1.5 1.5 0 0 0 0 2.121l4.243 4.243c.313.313.73.459 1.14.437h6.265a1.5 1.5 0 1 0 0-1h-4.72l8.196-8.197a1.5 1.5 0 0 0 0-2.121zm-1.414.706a.5.5 0 0 1 .707 0l4.243 4.243a.5.5 0 0 1 0 .707l-6.366 6.366l-4.95-4.95zM4.831 10.22l4.95 4.95l-1.687 1.687a.5.5 0 0 1-.707 0l-4.243-4.243a.5.5 0 0 1 0-.707z"></svg:path>`,
})
export class FluentEraserSegment20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

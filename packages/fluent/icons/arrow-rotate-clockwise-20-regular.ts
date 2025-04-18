import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRotateClockwise20RegularIcon],svg[fluent-arrow-rotate-clockwise-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a7 7 0 1 1 10 6.326V14.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-1.624A8 8 0 1 0 2 10a.5.5 0 0 0 1 0m7 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentArrowRotateClockwise20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

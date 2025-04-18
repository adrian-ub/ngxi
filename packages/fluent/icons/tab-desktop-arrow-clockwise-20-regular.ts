import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopArrowClockwise20RegularIcon],svg[fluent-tab-desktop-arrow-clockwise-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.997 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-3.754q.381-.462.657-1h3.097a1.5 1.5 0 0 0 1.5-1.5V7h-6.5a1.5 1.5 0 0 1-1.5-1.5V4h-2.5a1.5 1.5 0 0 0-1.5 1.5v3.101a5.5 5.5 0 0 0-1 .659zm13 .5v-.5a1.5 1.5 0 0 0-1.5-1.5h-5.5v1.5a.5.5 0 0 0 .5.5zM9.5 8.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.804a3.5 3.5 0 1 0 1.696 3a.5.5 0 0 1 1 0a4.5 4.5 0 1 1-2-3.742V9a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentTabDesktopArrowClockwise20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

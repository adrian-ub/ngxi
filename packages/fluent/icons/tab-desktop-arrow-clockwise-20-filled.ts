import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopArrowClockwise20FilledIcon],svg[fluent-tab-desktop-arrow-clockwise-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.497 3a2.5 2.5 0 0 0-2.5 2.5v3.76A5.48 5.48 0 0 1 6.5 8c.59 0 1.159.093 1.692.265A1.5 1.5 0 0 1 11 9v1.337c.63.895 1 1.986 1 3.163c0 1.33-.472 2.55-1.257 3.5h3.754a2.5 2.5 0 0 0 2.5-2.5V7h-7.5a1.5 1.5 0 0 1-1.5-1.5V3zm3.5 0v2.5a.5.5 0 0 0 .5.5h7.5v-.5a2.5 2.5 0 0 0-2.5-2.5zM10 11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.804a3.5 3.5 0 1 0 1.696 3a.5.5 0 0 1 1 0a4.5 4.5 0 1 1-2-3.742V9a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class FluentTabDesktopArrowClockwise20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

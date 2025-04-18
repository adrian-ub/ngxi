import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopSearch16FilledIcon],svg[fluent-tab-desktop-search-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h3v1.5A1.5 1.5 0 0 0 8.5 5H14v7a2 2 0 0 1-2 2h-1.085a1.5 1.5 0 0 0-.354-.56l-2-2A4.5 4.5 0 0 0 2 5.758V4a2 2 0 0 1 2-2m8 0a2 2 0 0 1 2 2H8.5a.5.5 0 0 1-.5-.5V2zM4.5 13c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 13m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class FluentTabDesktopSearch16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

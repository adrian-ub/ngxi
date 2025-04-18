import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopSearch20FilledIcon],svg[fluent-tab-desktop-search-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.996 5.5a2.5 2.5 0 0 1 2.5-2.5h2.5v2.5a1.5 1.5 0 0 0 1.5 1.5h7.5v7.5a2.5 2.5 0 0 1-2.5 2.5h-2.581a1.5 1.5 0 0 0-.354-.56l-2-2a4.5 4.5 0 0 0-6.565-5.68zm6 0V3h5.5a2.5 2.5 0 0 1 2.5 2.5V6h-7.5a.5.5 0 0 1-.5-.5M5.5 16c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 5.5 16m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class FluentTabDesktopSearch20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

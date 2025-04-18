import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReadingList16FilledIcon],svg[fluent-reading-list-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4.386a.614.614 0 0 1 1.126-.34a.75.75 0 0 0 1.248-.833A2.113 2.113 0 0 0 2 4.386c0 1.073.799 1.959 1.834 2.096A1 1 0 0 0 4 6.5h7.31a.75.75 0 0 0 0-1.5H4.114a.614.614 0 0 1-.614-.614M7.75 2.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-3 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM2 10.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m2.745 1.751a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class FluentReadingList16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

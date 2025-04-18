import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomIn16FilledIcon],svg[fluent-zoom-in-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 11a4.5 4.5 0 0 0 2.607-.832l3.613 3.612a.75.75 0 1 0 1.06-1.06l-3.612-3.613A4.5 4.5 0 1 0 6.5 11M7 4.5V6h1.5a.5.5 0 0 1 0 1H7v1.5a.5.5 0 0 1-1 0V7H4.5a.5.5 0 0 1 0-1H6V4.5a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentZoomIn16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

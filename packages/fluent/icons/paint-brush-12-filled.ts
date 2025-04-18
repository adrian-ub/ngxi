import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush12FilledIcon],svg[fluent-paint-brush-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7a1 1 0 0 0 1 1h1v1.5c0 .827.673 1.5 1.5 1.5S7 10.327 7 9.5V8h1a1 1 0 0 0 1-1V6H2zm6.5-6H8v2a.5.5 0 0 1-1 0V1H6v1.5a.5.5 0 0 1-1 0V1H2.5a.5.5 0 0 0-.5.5V5h7V1.5a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class FluentPaintBrush12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush12RegularIcon],svg[fluent-paint-brush-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 1h-6a.5.5 0 0 0-.5.5V7c0 .552.449 1 1 1h1v1.5c0 .827.673 1.5 1.5 1.5S7 10.327 7 9.5V8h1c.551 0 1-.448 1-1V1.5a.5.5 0 0 0-.5-.5M4 2v.5a.5.5 0 0 0 1 0V2h1v1a.5.5 0 0 0 1 0V2h1v3H3V2zm2.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 0-.5-.5H3V6h5v1z"></svg:path>`,
})
export class FluentPaintBrush12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush16FilledIcon],svg[fluent-paint-brush-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4.5V1H9v2.5a.5.5 0 0 1-1 0V1H3.5a.5.5 0 0 0-.5.5V7h10V1.5a.5.5 0 0 0-.5-.5H11v3.5a.5.5 0 0 1-1 0M13 8H3v1a2 2 0 0 0 2 2h1.5v2.5a1.5 1.5 0 0 0 3 0V11H11a2 2 0 0 0 2-2z"></svg:path>`,
})
export class FluentPaintBrush16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrushSubtract32FilledIcon],svg[fluent-paint-brush-subtract-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v5a1 1 0 1 0 2 0V2h2v7a1 1 0 1 0 2 0V2h2a1 1 0 0 1 1 1v11H6V3a1 1 0 0 1 1-1zm-3 21a8.98 8.98 0 0 1 3.343-7H6v2.75A3.25 3.25 0 0 0 9.25 22H12v4a4 4 0 0 0 5.144 3.834A8.98 8.98 0 0 1 14 23m16.5 0a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0M18 22.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentPaintBrushSubtract32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

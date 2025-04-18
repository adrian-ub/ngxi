import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush32LightIcon],svg[fluent-paint-brush-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a1 1 0 0 0-1 1v15.5A3.5 3.5 0 0 0 9.5 22H12v4a4 4 0 0 0 8 0v-4h2.5a3.5 3.5 0 0 0 3.5-3.5V3a1 1 0 0 0-1-1zm11 1h3v6.5a.5.5 0 0 0 1 0V3h3v12H7V3h10v4.5a.5.5 0 0 0 1 0zM7 16h18v2.5a2.5 2.5 0 0 1-2.5 2.5H20a1 1 0 0 0-1 1v4a3 3 0 1 1-6 0v-4a1 1 0 0 0-1-1H9.5A2.5 2.5 0 0 1 7 18.5z"></svg:path>`,
})
export class FluentPaintBrush32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

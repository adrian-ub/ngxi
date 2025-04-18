import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush20FilledIcon],svg[fluent-paint-brush-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4.499v-2.5H5.5a.5.5 0 0 0-.5.5v6.5h10V2.5a.5.5 0 0 0-.5-.5H13v3.502a.5.5 0 0 1-1 0V2h-1v2.5a.5.5 0 0 1-1 0m5 5.5H5v1.004a2 2 0 0 0 2 2h1.5v3.498a1.5 1.5 0 1 0 3 0v-3.498H13a2 2 0 0 0 2-2z"></svg:path>`,
})
export class FluentPaintBrush20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

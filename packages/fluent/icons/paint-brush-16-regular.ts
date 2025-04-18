import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush16RegularIcon],svg[fluent-paint-brush-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1a.5.5 0 0 0-.5.5V9a2 2 0 0 0 2 2h1v2a2 2 0 1 0 4 0v-2h1a2 2 0 0 0 2-2V1.5a.5.5 0 0 0-.5-.5zM4 7V2h4v1.5a.5.5 0 0 0 1 0V2h1v2.5a.5.5 0 0 0 1 0V2h1v5zm0 1h8v1a1 1 0 0 1-1 1H9.5a.5.5 0 0 0-.5.5V13a1 1 0 1 1-2 0v-2.5a.5.5 0 0 0-.5-.5H5a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentPaintBrush16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

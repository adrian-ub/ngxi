import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush28RegularIcon],svg[fluent-paint-brush-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2a.75.75 0 0 0-.75.75v13.5A2.75 2.75 0 0 0 8.75 19H11v4a3 3 0 0 0 6 0v-4h2.25A2.75 2.75 0 0 0 22 16.25V2.75a.75.75 0 0 0-.75-.75zM20.5 3.5V13h-13V3.5h7v2.75a.75.75 0 0 0 1.5 0V3.5h1.5v4.75a.75.75 0 0 0 1.5 0V3.5zm-13 11h13v1.75c0 .69-.56 1.25-1.25 1.25h-3a.75.75 0 0 0-.75.75V23a1.5 1.5 0 0 1-3 0v-4.75a.75.75 0 0 0-.75-.75h-3c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class FluentPaintBrush28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

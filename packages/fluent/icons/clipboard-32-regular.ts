import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClipboard32RegularIcon],svg[fluent-clipboard-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2c1.306 0 2.418.835 2.83 2h1.67A3.5 3.5 0 0 1 27 7.5v19a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2zm-6 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM8.5 6A1.5 1.5 0 0 0 7 7.5v19A1.5 1.5 0 0 0 8.5 28h15a1.5 1.5 0 0 0 1.5-1.5v-19A1.5 1.5 0 0 0 23.5 6h-1.67A3 3 0 0 1 19 8h-6a3 3 0 0 1-2.83-2z"></svg:path>`,
})
export class FluentClipboard32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

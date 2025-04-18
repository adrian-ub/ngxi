import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClipboardPaste32RegularIcon],svg[fluent-clipboard-paste-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6h1.67A3 3 0 0 0 12 8h6a3 3 0 0 0 2.83-2h1.67A1.5 1.5 0 0 1 24 7.5a1 1 0 1 0 2 0A3.5 3.5 0 0 0 22.5 4h-1.67A3 3 0 0 0 18 2h-6a3 3 0 0 0-2.83 2H7.5A3.5 3.5 0 0 0 4 7.5v19A3.5 3.5 0 0 0 7.5 30H12a1 1 0 1 0 0-2H7.5A1.5 1.5 0 0 1 6 26.5v-19A1.5 1.5 0 0 1 7.5 6M12 4h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2m5.5 6a3.5 3.5 0 0 0-3.5 3.5v13a3.5 3.5 0 0 0 3.5 3.5h8a3.5 3.5 0 0 0 3.5-3.5v-13a3.5 3.5 0 0 0-3.5-3.5zM16 13.5a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5z"></svg:path>`,
})
export class FluentClipboardPaste32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

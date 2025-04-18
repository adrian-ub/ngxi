import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClipboardPaste16FilledIcon],svg[fluent-clipboard-paste-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2h.585A1.5 1.5 0 0 1 5.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 12 3.5V5h-1V3.5a.5.5 0 0 0-.5-.5h-.585A1.5 1.5 0 0 1 8.5 4h-3a1.5 1.5 0 0 1-1.415-1H3.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h2.612v1H3.5A1.5 1.5 0 0 1 2 13.5v-10A1.5 1.5 0 0 1 3.5 2m2 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm3 4A1.5 1.5 0 0 0 7 7.5v6A1.5 1.5 0 0 0 8.5 15h4a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 6z"></svg:path>`,
})
export class FluentClipboardPaste16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

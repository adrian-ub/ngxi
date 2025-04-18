import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentSplitHintOff16FilledIcon],svg[fluent-document-split-hint-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.707V7.5a.5.5 0 0 0 .5.5h3.793L12 12.707V13a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 1.905-1.388l1.241 1.242a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708zm9 6.172l.909.909A.5.5 0 0 0 13 10.5v-1a.5.5 0 0 0-1 0zM3.502 1.38L10.122 8H12.5a.5.5 0 0 0 .5-.5V6H9.5A1.5 1.5 0 0 1 8 4.5V1H4.5c-.383 0-.733.144-.998.38M9 4.5V1.25L12.75 5H9.5a.5.5 0 0 1-.5-.5m-5 5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm0 3a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1zM7.5 14a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentDocumentSplitHintOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

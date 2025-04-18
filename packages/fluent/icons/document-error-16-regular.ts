import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentError16RegularIcon],svg[fluent-document-error-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.002a2 2 0 0 0-2 2v2.205a5.5 5.5 0 0 1 1-.185v-2.02a1 1 0 0 1 1-1h3v2.5a1.5 1.5 0 0 0 1.5 1.5H13v6.996a1 1 0 0 1-1 1H9.744q-.472.572-1.078 1H12a2 2 0 0 0 2-2v-7.58a1.5 1.5 0 0 0-.44-1.06l-2.918-2.917a1.5 1.5 0 0 0-1.06-.44zm4 3.5v-2.29l2.791 2.79H10.5a.5.5 0 0 1-.5-.5m0 5.998a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M5.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25"></svg:path>`,
})
export class FluentDocumentError16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

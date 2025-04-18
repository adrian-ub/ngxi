import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentAdd28FilledIcon],svg[fluent-document-add-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2v8a2 2 0 0 0 2 2h8v12a2 2 0 0 1-2 2h-9.4A7.5 7.5 0 0 0 4 13.865V4a2 2 0 0 1 2-2zm1.5.5V10a.5.5 0 0 0 .5.5h7.5zm-1.5 18a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20H3.5a.5.5 0 0 0 0 1H7v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H8z"></svg:path>`,
})
export class FluentDocumentAdd28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

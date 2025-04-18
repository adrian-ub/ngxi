import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentSave20FilledIcon],svg[fluent-document-save-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H11v-5.586A2 2 0 0 0 10.414 11L9 9.586A2 2 0 0 0 7.586 9H4V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM2 10h1v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-2.41a1 1 0 0 1 .293.203l1.414 1.414a1 1 0 0 1 .293.707V18a1 1 0 0 1-1 1v-4.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V19a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1m6 5v4H3v-4zm-4-5h3v2H4z"></svg:path>`,
})
export class FluentDocumentSave20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentDataLink32FilledIcon],svg[fluent-document-data-link-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v7a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3h-7.531a6 6 0 0 0 2.031-4.5a5.98 5.98 0 0 0-1.5-3.969V19a1 1 0 1 0-2 0v1.044a6 6 0 0 0-2.5-.544H12V13a1 1 0 1 0-2 0v6.5H6.5a6 6 0 0 0-1.5.189V5a3 3 0 0 1 3-3zm2 .117V9a1 1 0 0 0 1 1h6.883a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M22 16a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zM8 22a1 1 0 0 0-1-1h-.5a4.5 4.5 0 1 0 0 9H7a1 1 0 1 0 0-2h-.5a2.5 2.5 0 0 1 0-5H7a1 1 0 0 0 1-1m4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5H12a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentDocumentDataLink32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

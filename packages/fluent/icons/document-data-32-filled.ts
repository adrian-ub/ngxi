import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentData32FilledIcon],svg[fluent-document-data-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v7a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm2 .117V9a1 1 0 0 0 1 1h6.883a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M17 21a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-6-9a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V13a1 1 0 0 0-1-1m11 5a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0z"></svg:path>`,
})
export class FluentDocumentData32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

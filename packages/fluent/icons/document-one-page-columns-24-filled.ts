import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentOnePageColumns24FilledIcon],svg[fluent-document-one-page-columns-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v15.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75zM8.75 5a.75.75 0 0 0-.75.75v12.5a.75.75 0 0 0 1.5 0V5.75A.75.75 0 0 0 8.75 5m7.25.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentDocumentOnePageColumns24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

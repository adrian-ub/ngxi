import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFolder20FilledIcon],svg[fluent-document-folder-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v7h-.879L9 6.879A3 3 0 0 0 6.879 6H5c-.35 0-.687.06-1 .17V4a2 2 0 0 1 2-2zm3 9c.35 0 .687.06 1 .17V6a2 2 0 0 0-1-1.732zM5 7a2 2 0 0 0-2 2v6.5A2.5 2.5 0 0 0 5.5 18h9a2.5 2.5 0 0 0 2.5-2.5V14a2 2 0 0 0-2-2h-1.879a1 1 0 0 1-.707-.293L8.293 7.586A2 2 0 0 0 6.879 7z"></svg:path>`,
})
export class FluentDocumentFolder20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

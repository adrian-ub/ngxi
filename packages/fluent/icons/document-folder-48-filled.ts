import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentFolder48FilledIcon],svg[fluent-document-folder-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8.25A4.25 4.25 0 0 1 12.25 4h19a4.25 4.25 0 0 1 4.25 4.25V27h-4.154l-10.17-10.17A6.25 6.25 0 0 0 16.758 15H10.25c-.793 0-1.552.148-2.25.417zM37.5 27h.25c.793 0 1.552.148 2.25.417V13.25a4.25 4.25 0 0 0-2.5-3.874zM6 21.25A4.25 4.25 0 0 1 10.25 17h6.507a4.25 4.25 0 0 1 3.006 1.245l10.242 10.242a1.75 1.75 0 0 0 1.238.513h6.507A4.25 4.25 0 0 1 42 33.25v4.5A6.25 6.25 0 0 1 35.75 44h-23.5A6.25 6.25 0 0 1 6 37.75z"></svg:path>`,
})
export class FluentDocumentFolder48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentCopy48FilledIcon],svg[fluent-document-copy-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 14.75V5h-6.75A4.25 4.25 0 0 0 14 9.25v24.5A4.25 4.25 0 0 0 18.25 38h16.5A4.25 4.25 0 0 0 39 33.75V19h-9.75A4.25 4.25 0 0 1 25 14.75m2.5 0V5.5l11 11h-9.25a1.75 1.75 0 0 1-1.75-1.75M9 13.7a4 4 0 0 1 2.5-3.71v23.76a6.75 6.75 0 0 0 6.75 6.75h15.76A4 4 0 0 1 30.3 43H18.25A9.25 9.25 0 0 1 9 33.75z"></svg:path>`,
})
export class FluentDocumentCopy48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnDocumentTextIcon],svg[typcn-document-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21H7c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3M7 5c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h10c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1zm9 6H8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1m0-3H8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1m0 6H8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1m0 3H8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1"></svg:path>`,
})
export class TypcnDocumentTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

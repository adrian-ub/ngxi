import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiDocumentIcon],svg[oi-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h7V4H3V0zm4 0v3h3zM1 2h1v1H1zm0 2h1v1H1zm0 2h4v1H1z"></svg:path>`,
})
export class OiDocumentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

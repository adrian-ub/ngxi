import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiDocumentsIcon],svg[oui-documents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 0c.274 0 .537.113.726.312l3.2 3.428c.176.186.274.433.274.689V13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM12 5H8.5a.5.5 0 0 1-.5-.5V1H2v12h10zm-7.5 6a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1zm0-3a.5.5 0 0 1 0-1h5a.5.5 0 1 1 0 1zm1 8a.5.5 0 1 1 0-1H14V6.5a.5.5 0 1 1 1 0V15a1 1 0 0 1-1 1z"></svg:path>`,
})
export class OuiDocumentsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

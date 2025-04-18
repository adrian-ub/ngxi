import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionDocumentsSharpIcon],svg[ion-documents-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M307.94 248L216 154.52V242a6 6 0 0 0 6 6Z"></svg:path><svg:path fill="currentColor" d="M184 268V144H60a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h248a12 12 0 0 0 12-12V280H196a12 12 0 0 1-12-12m182-148h85.94L360 26.52V114a6 6 0 0 0 6 6"></svg:path><svg:path fill="currentColor" d="M340 152a12 12 0 0 1-12-12V16H172a12 12 0 0 0-12 12v84h42.12A40.8 40.8 0 0 1 231 124.14l109.16 111a41.1 41.1 0 0 1 11.83 29V400H452a12 12 0 0 0 12-12V152Z"></svg:path>`,
})
export class IonDocumentsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

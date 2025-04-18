import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRecordKeysIcon],svg[codicon-record-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 8H3V4h11zm-3-6h-1v1h1zm-1 2H9v1h1zm2-2h1v1h-1zm1 4h-1v1h1zM6 9h5v1H6zm7-2h-2v1h2zM8 5h1v1H8zm0 2H7v1h1zM4 9h1v1H4zm0-4h1v1H4zm3 0H6v1h1zM4 7h2v1H4z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconRecordKeysIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

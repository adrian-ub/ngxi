import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etDocumentIcon],svg[et-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.5 32h21c.827 0 1.5-.673 1.5-1.5v-21c0-.017-.008-.031-.009-.047q-.004-.033-.013-.065a.5.5 0 0 0-.09-.191c-.007-.009-.006-.02-.013-.029l-8-9l-.01-.006a.5.5 0 0 0-.223-.134q-.027-.008-.056-.011C15.557.012 15.53 0 15.5 0h-14C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5M16 1.815L22.387 9H16.5c-.22 0-.5-.42-.5-.75zM1 1.5a.5.5 0 0 1 .5-.5H15v7.25c0 .809.655 1.75 1.5 1.75H23v20.5a.5.5 0 0 1-.5.5h-21c-.28 0-.5-.22-.5-.5z"></svg:path><svg:path d="M5.5 14h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1m0 4h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1m0-8h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1m0 12h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1m0 4h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class EtDocumentIcon {
  readonly viewBox = input("0 0 24 32")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

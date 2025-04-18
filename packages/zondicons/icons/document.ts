import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsDocumentIcon],svg[zondicons-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h12V6h-4V2H4zm-2 1V0h12l4 4v16H2z"></svg:path>`,
})
export class ZondiconsDocumentIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

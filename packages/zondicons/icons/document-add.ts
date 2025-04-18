import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsDocumentAddIcon],svg[zondicons-document-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2zm-5 8h12V6h-4V2H4zm-2 1V0h12l4 4v16H2z"></svg:path>`,
})
export class ZondiconsDocumentAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

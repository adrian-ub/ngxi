import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTextDocumentAltSolidIcon],svg[teenyicons-text-document-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zm3 2.497h7v1H4zm7 2.998H4v1h7zM11 10H4v1h7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsTextDocumentAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

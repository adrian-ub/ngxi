import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsDocumentsOutlineIcon],svg[famicons-documents-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 264.13V436c0 24.3-19.05 44-42.95 44H107c-23.95 0-43-19.7-43-44V172a44.26 44.26 0 0 1 44-44h94.12a24.55 24.55 0 0 1 17.49 7.36l109.15 111a25.4 25.4 0 0 1 7.24 17.77Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 128v108a28.34 28.34 0 0 0 28 28h108"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M176 128V76a44.26 44.26 0 0 1 44-44h94a24.83 24.83 0 0 1 17.61 7.36l109.15 111A25.1 25.1 0 0 1 448 168v172c0 24.3-19.05 44-42.95 44H344"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M312 32v108a28.34 28.34 0 0 0 28 28h108"></svg:path>`,
})
export class FamiconsDocumentsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

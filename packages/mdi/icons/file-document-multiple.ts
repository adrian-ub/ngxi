import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentMultipleIcon],svg[mdi-file-document-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v18h16v2H4c-1.1 0-2-.9-2-2V4zm11 3h5.5L15 1.5zM8 0h8l6 6v12c0 1.11-.89 2-2 2H8a2 2 0 0 1-2-2V2c0-1.11.89-2 2-2m9 16v-2H8v2zm3-4v-2H8v2z"></svg:path>`,
})
export class MdiFileDocumentMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

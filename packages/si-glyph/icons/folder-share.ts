import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderShareIcon],svg[si-glyph-folder-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.413 2.034L8.575 0H2.02v2.034h-.979l.021 8.924h.978l-.019 1h7.021L9.021 13h.937l.021-1.042h5.664l1.397-9.924zm5.366 9.069H2.837l1.428-8.127h11.756zM1 15h1.979v.956H1zm4 0h1.979v.956H5zm7 0h1.979v.956H12zm3 0h1.979v.956H15zm-5 0v-1H9v1H8v1h3v-1z"></svg:path>`,
})
export class SiGlyphFolderShareIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

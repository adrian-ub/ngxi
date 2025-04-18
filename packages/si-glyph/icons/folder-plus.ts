import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderPlusIcon],svg[si-glyph-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M5.787 2.042H2.02v1.021H.022v9.913h1.02l.002 1h14.902L15.967 5H7.349zm2.192 4.937h1.062V9h2.021v1.062H9.041v2.021H7.979v-2.021H5.958V9h2.021z"></svg:path><svg:path d="M13.964 3.982v-.94h-5.94l.33.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

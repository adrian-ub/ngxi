import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderErrorIcon],svg[si-glyph-folder-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.35 5L6.788 2.042H3.021v1.021H1.023v9.913h1.02l.002 1h14.902L16.968 5zm3.568 6.109l-.828.829l-1.578-1.577l-1.578 1.577l-.83-.829l1.578-1.578l-1.578-1.578l.83-.828l1.578 1.576l1.576-1.576l.83.828l-1.578 1.578z"></svg:path><svg:path d="M14.964 3.982v-.94h-5.94l.33.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderErrorIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

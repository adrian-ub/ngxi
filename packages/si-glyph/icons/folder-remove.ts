import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderRemoveIcon],svg[si-glyph-folder-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.35 5L6.788 2.042H3.021v1.021H1.023v9.913h1.02l.002 1h14.902L16.968 5zm2.733 5.042H6.979V8.917h4.104z"></svg:path><svg:path d="M14.964 3.982v-.94h-5.94l.33.94z"></svg:path></svg:g>`,
})
export class SiGlyphFolderRemoveIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

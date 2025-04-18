import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMustacheIcon],svg[si-glyph-mustache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.907 7.514c-1.561 1.638-2.747 1.19-4.694-.629c-1.611-1.503-2.934-.58-3.254.715c-.324-1.297-1.648-2.218-3.258-.712c-1.943 1.821-3.129 2.271-4.691.636c-.155 1.646 1.514 3.188 3.725 3.441c2.049.234 3.846-.719 4.225-2.168c.383 1.451 2.179 2.401 4.229 2.163c2.209-.257 3.875-1.799 3.718-3.446"></svg:path>`,
})
export class SiGlyphMustacheIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

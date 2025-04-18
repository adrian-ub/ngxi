import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphJumpPageLeftRightIcon],svg[si-glyph-jump-page-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.958 8.951V7.007H4.979v-1.94c0-.49-3.714 2.265-3.714 2.265a.946.946 0 0 0-.001 1.323s3.715 2.818 3.715 2.293V8.95h1.979zM11.002 7v1.973h2.046V11c0 .455 3.647-2.316 3.647-2.316a.87.87 0 0 0 0-1.261s-3.714-2.78-3.714-2.388L13.048 7zM8 0h2v16H8z"></svg:path>`,
})
export class SiGlyphJumpPageLeftRightIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudIcon],svg[si-glyph-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.797 7.445c-.25 0-.487.068-.713.168c-.694-1.036-1.832-1.714-3.119-1.714c-.206 0-.407.022-.605.056c-.682-1.129-1.869-1.88-3.225-1.88c-1.91 0-3.49 1.491-3.779 3.438l-.051-.004c-1.281 0-2.318 1.104-2.318 2.467h16c-.139-1.425-1.061-2.531-2.19-2.531"></svg:path>`,
})
export class SiGlyphCloudIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

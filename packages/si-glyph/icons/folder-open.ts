import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderOpenIcon],svg[si-glyph-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.03 4.042l-.802-1H1.015v1H.009V13h1.017l.005.984l13.619-.021l1.303-9.922H8.03zm5.79 8.999H1.711L3.1 4.953h11.932z"></svg:path>`,
})
export class SiGlyphFolderOpenIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

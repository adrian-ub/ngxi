import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphHatIcon],svg[si-glyph-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.708 8.211c-.43.917-2.16 2.028-4.708 2.028c-2.532 0-4.333-1.097-4.712-2.013C1.375 8.312 0 9.456 0 10.136c0 1.128 3.581 2.728 8 2.728c4.418 0 8-1.6 8-2.728c0-.689-1.375-1.567-3.292-1.925"></svg:path><svg:path d="M10.077 3.197c-.516 0-1.582.354-2.065.354s-1.549-.354-2.064-.354c-1.114 0-1.81 1.372-1.907 1.897l-.02 2.427c.562.506 1.611 1.142 2.761 1.238a15.3 15.3 0 0 0 2.52 0c1.15-.097 2.074-.654 2.668-1.221l-.005-2.413c-.086-.546-.784-1.928-1.888-1.928"></svg:path></svg:g>`,
})
export class SiGlyphHatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

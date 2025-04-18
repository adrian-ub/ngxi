import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsGlyphsIcon],svg[file-icons-glyphs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M282.643 308.127c-30.118 0-44.019-16.217-44.019-56.76c0-44.019 18.534-55.602 99.62-55.602c44.018 0 91.512 3.475 149.43 9.267L506.208 13.9C444.814 4.633 375.312 0 304.652 0C82.244 0 0 71.819 0 256c0 188.814 81.086 256 301.176 256c61.394 0 126.263-4.634 203.874-19.692V240.94H296.543v67.186z"></svg:path>`,
})
export class FileIconsGlyphsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

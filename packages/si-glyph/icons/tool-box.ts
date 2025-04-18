import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphToolBoxIcon],svg[si-glyph-tool-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.988 9.031V8H5.031v1.031H2.938V8H1.014v6H17V8h-1.969v1.031zM5 5.986v.982h8v-.982h2v.982h1.987V4H1v2.968h1.974v-.982zm2.003-3.043H6.01V1.031h5.959v1.912h-.96v-.956H7.003z"></svg:path>`,
})
export class SiGlyphToolBoxIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

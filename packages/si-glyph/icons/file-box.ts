import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFileBoxIcon],svg[si-glyph-file-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.993.006H3.072l-2.06 8.755v5.17c0 1.334.472 2.028 1.804 2.028h12.28c1.246 0 1.885-.527 1.885-2.111V8.761zM11.016 10H6.985V8.969h4.031zM2.505 8.01L3.912.981h10.265L15.54 8.01z"></svg:path><svg:path d="M5 4h7.947v.968H5zm1-2h5.947v.968H6zM4 6h9.951v.965H4z"></svg:path></svg:g>`,
})
export class SiGlyphFileBoxIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFloppyDiskIcon],svg[si-glyph-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M12.961.031H5.003v5.952h7.958zM12 5h-2V1h2z"></svg:path><svg:path d="M14.988.031h-.909v7.07H3.941V.031H2.99c-1.105 0-2 .92-2 2.052v10.895c0 1.133.896 2.053 2 2.053h12c1.106 0 2-.92 2-2.053V2.083zM12.968 13h-8v-1h8zm0-2h-8v-1h8z"></svg:path></svg:g>`,
})
export class SiGlyphFloppyDiskIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

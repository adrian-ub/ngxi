import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDropboxIcon],svg[si-glyph-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.98 1.41L2.615 4.36L.042 2.695L4.627.015zm7.999 1.285L12 0L9.016 1.388l4.944 3.139zM6.13 12.667L2 10.184v2.455L7.953 16v-5.675z"></svg:path><svg:path d="M2.589 5.333L1 7.723l5.115 2.96l1.838-2.451zM9 10.065V16l5.979-3.167v-2.472l-4.134 2.047z"></svg:path><svg:path d="m9.021 8.22l1.864 2.45l5.094-2.726l-1.515-2.624z"></svg:path></svg:g>`,
})
export class SiGlyphDropboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

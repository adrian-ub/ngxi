import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDatabaseDownloadIcon],svg[si-glyph-database-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(2)"><svg:ellipse cx="6.43" cy="2.421" rx="6.43" ry="2.421"></svg:ellipse><svg:path d="M6.494 6.051C2.978 6.051.047 5.049.047 4.377v3.346c0 1.214 2.887 2.196 6.447 2.196s6.447-.982 6.447-2.196V4.377c0 .672-2.931 1.674-6.447 1.674"></svg:path></svg:g><svg:path d="M11.014 12.003h2.02V10.5c-1.175.33-2.799.58-4.57.58c-3.516 0-6.447-.98-6.447-1.636v3.269c0 1.188 2.887 2.146 6.447 2.146c1.648 0 3.146-.207 4.287-.546zm3.968-.987v1.987h1.002l-1.492 1.966l-1.476-1.966h1.017v-1.987z"></svg:path></svg:g>`,
})
export class SiGlyphDatabaseDownloadIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

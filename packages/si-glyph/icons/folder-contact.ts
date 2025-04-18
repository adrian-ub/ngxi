import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphFolderContactIcon],svg[si-glyph-folder-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7 8v1.957h2.014V8zm3-1h1v3h-1z"></svg:path><svg:path d="M7.35 4L5.788 2.042H2.021v1.021H.023v9.913h1.02l.002 1h14.902L15.968 4zm3.643 6l-.018 1L7 11.067v-.99l-1-.021V7.972h1v-.98l3-.01V6H6v1h-.984v3.964h1v1.007h3.957V13H6v-1l-1 .058v-1.021H3.953V7.034h1.008V6.025H6V5h3.958v1.011H11v.981h.953V10z"></svg:path><svg:path d="M12.958 2.979h-4.27l-.667-.958h4.937z"></svg:path></svg:g>`,
})
export class SiGlyphFolderContactIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

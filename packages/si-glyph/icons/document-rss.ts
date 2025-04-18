import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentRssIcon],svg[si-glyph-document-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.958.042H2.02v15.911h11.959V4.042H7.958zm-3.979 13.02v-2.305a2.305 2.305 0 0 1 2.306 2.305zm3.615 0c0-2.07-1.57-3.659-3.614-3.659V7.83c2.718 0 5.177 2.48 5.177 5.232zm4.485-.025h-1.562c0-3.686-2.835-6.583-6.507-6.583V4.893c4.367.001 8.069 3.76 8.069 8.144"></svg:path><svg:path d="M9.047.036v2.953h4.914z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentRssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

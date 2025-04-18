import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSlideShowIcon],svg[si-glyph-slide-show-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7 0h1.906v2.219H7z"></svg:path><svg:path d="M15.993 2.621c0-.334-.319-.605-.712-.605H.781c-.394 0-.712.271-.712.605v1.316h.962v8.049h4.434L3.17 14.724c-.161.162-.101.485.136.722l.43.429l3.327-3.77v3.863h1.851v-3.966l3.419 3.872l.429-.429c.237-.236.298-.56.136-.722l-2.365-2.738h4.406V3.936h1.056V2.621zm-1.962 8.485H1.959V3.937h12.072z"></svg:path></svg:g>`,
})
export class SiGlyphSlideShowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

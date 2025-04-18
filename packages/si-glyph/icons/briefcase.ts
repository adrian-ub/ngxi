import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBriefcaseIcon],svg[si-glyph-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.959 3.079c0-.619.482-1.124 1.072-1.124h1.838c.59 0 1.184.505 1.184 1.124v-.058h.919v-.474c0-.86-.478-1.548-1.458-1.548H7.385c-.654 0-1.362.73-1.362 1.548v.474h.937v.058z"></svg:path><svg:path d="M11 5.969v1.012h6V3.016H.985v3.965h6.003V5.969zM7 8.998v-.995H1.022V16H17V8.003h-5.987v.995H7.001zM8 7v.967h1.99V7z"></svg:path></svg:g>`,
})
export class SiGlyphBriefcaseIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphRssIcon],svg[si-glyph-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M1 3c7.355 0 13 5.593 13 12.968h3C17 7.198 9.747 0 1 0z"></svg:path><svg:path d="M1.052 8.99c4.008 0 6.957 2.9 6.957 6.919h2.95c0-5.346-4.578-9.847-9.907-9.847zm.01 6.91h3.91c0-2.491-1.43-3.797-3.91-3.82c-.014 0 0 3.82 0 3.82"></svg:path></svg:g>`,
})
export class SiGlyphRssIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

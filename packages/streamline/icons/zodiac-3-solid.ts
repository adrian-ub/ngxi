import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac3SolidIcon],svg[streamline-zodiac-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.461 0a3.77 3.77 0 0 0-3.769 3.77v4.666a2.846 2.846 0 1 0 2 2.702v-7.37a1.77 1.77 0 1 1 3.539 0v7.846a2.385 2.385 0 0 0 4.769 0a1 1 0 0 0-2 0a.385.385 0 0 1-.77 0V3.77A3.77 3.77 0 0 0 7.462 0ZM3.692 11.145v.016a.846.846 0 1 1 0-.016" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac5SolidIcon],svg[streamline-zodiac-5-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.02 1.107a1 1 0 0 0-1.987.23A5 5 0 0 0 4.011 4.77a5 5 0 1 0 5.978 0a5 5 0 0 0 1.978-3.432a1 1 0 0 0-1.987-.23a3 3 0 0 1-5.96 0ZM4 8.777a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac5SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac3Icon],svg[streamline-zodiac-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 13.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M13.5 12a1.5 1.5 0 1 1-3 0V3.5a3 3 0 0 0-6 0v8"></svg:path></svg:g>`,
})
export class StreamlineZodiac3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

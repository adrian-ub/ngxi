import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac6Icon],svg[streamline-zodiac-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 13.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-4H.5"></svg:path><svg:path d="M9.5 11.5V.5S5 1.5 5 5.5C5 1.5.5.5.5.5"></svg:path></svg:g>`,
})
export class StreamlineZodiac6Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

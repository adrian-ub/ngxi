import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac2Icon],svg[streamline-zodiac-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5 3.25V10M.5 10V3.25a2.25 2.25 0 0 1 4.5 0a2.25 2.25 0 1 1 4.5 0V11a2 2 0 0 0 4 0v-1"></svg:path><svg:path d="M9.5 4h1.88a2 2 0 0 1 1.46 3.37L7.5 13"></svg:path></svg:g>`,
})
export class StreamlineZodiac2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac10Icon],svg[streamline-zodiac-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 13.5a7.9 7.9 0 0 0 3-6.5a7.9 7.9 0 0 0-3-6.5m11 13a7.9 7.9 0 0 1-3-6.5a7.9 7.9 0 0 1 3-6.5M.5 7h13"></svg:path>`,
})
export class StreamlineZodiac10Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

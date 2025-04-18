import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac8Icon],svg[streamline-zodiac-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 12h13m0-4h-3c.344-.61.516-1.3.5-2a4 4 0 1 0-8 0a3.9 3.9 0 0 0 .54 2H.5"></svg:path>`,
})
export class StreamlineZodiac8Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac5Icon],svg[streamline-zodiac-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path d="M2.53.5a4.5 4.5 0 0 0 8.94 0"></svg:path></svg:g>`,
})
export class StreamlineZodiac5Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

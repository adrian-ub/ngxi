import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac9Icon],svg[streamline-zodiac-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5a7.9 7.9 0 0 0 6.5 3a7.9 7.9 0 0 0 6.5-3m-13 13a7.9 7.9 0 0 1 6.5-3a7.9 7.9 0 0 1 6.5 3m-9-10.34v7.68m5-7.68v7.68"></svg:path>`,
})
export class StreamlineZodiac9Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

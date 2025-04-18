import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac12Icon],svg[streamline-zodiac-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 6.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m8 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-8-11h10.5m-13 11H11"></svg:path>`,
})
export class StreamlineZodiac12Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

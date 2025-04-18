import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac4Icon],svg[streamline-zodiac-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 3l2.3 2.68a1 1 0 0 0 1.46.06l2-2a1 1 0 0 1 1.42 0l2 2a1 1 0 0 0 1.46-.06L13.5 3M.5 8l2.3 2.68a1 1 0 0 0 1.46.06l2-2a1 1 0 0 1 1.42 0l2 2a1 1 0 0 0 1.46-.06L13.5 8"></svg:path>`,
})
export class StreamlineZodiac4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac1Icon],svg[streamline-zodiac-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10V4a2 2 0 1 1 4 0a2 2 0 1 1 4 0v6a2 2 0 0 0 4 0V8"></svg:path><svg:path d="m11.5 9l1-1l1 1m-9-5v6"></svg:path></svg:g>`,
})
export class StreamlineZodiac1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

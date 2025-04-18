import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphaIcon],svg[hugeicons-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.394 4c.2 1.85-.05 6-1.223 9.275C14.772 17.5 12.674 19.35 11 19.8c-3.246.873-5.969-1.35-7.117-3.825c-1.474-3.175-1.074-6.85.974-9.5s5.918-3.8 8.79-.225c1.1 1.675 1.574 3.475 1.798 4.925c.45 1.6.675 5.6 1.848 7.55c.924 1.45 2.348 1.375 2.872 1.15c.35-.175.834-.555.834-1.655" color="currentColor"></svg:path>`,
})
export class HugeiconsAlphaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

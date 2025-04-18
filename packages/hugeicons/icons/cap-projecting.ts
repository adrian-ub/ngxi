import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCapProjectingIcon],svg[hugeicons-cap-projecting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 5H10c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 7.787 3 9.19 3 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C5.787 19 7.19 19 10 19h11"></svg:path><svg:path d="M13 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0h8"></svg:path></svg:g>`,
})
export class HugeiconsCapProjectingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

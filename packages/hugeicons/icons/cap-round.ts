import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCapRoundIcon],svg[hugeicons-cap-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 5H10a7 7 0 0 0 0 14h11"></svg:path><svg:path d="M13 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0h8"></svg:path></svg:g>`,
})
export class HugeiconsCapRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

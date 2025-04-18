import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowTurnUpIcon],svg[hugeicons-arrow-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 11v4.5a4.5 4.5 0 1 0 9 0V4"></svg:path><svg:path d="M18 7s-2.21-3-3-3s-3 3-3 3"></svg:path></svg:g>`,
})
export class HugeiconsArrowTurnUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

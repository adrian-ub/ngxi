import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowTurnForwardIcon],svg[hugeicons-arrow-turn-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 6H8.5a4.5 4.5 0 0 0 0 9H20"></svg:path><svg:path d="M17 12s3 2.21 3 3s-3 3-3 3"></svg:path></svg:g>`,
})
export class HugeiconsArrowTurnForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

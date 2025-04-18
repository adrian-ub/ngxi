import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowTurnBackwardIcon],svg[hugeicons-arrow-turn-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 6h4.5a4.5 4.5 0 1 1 0 9H4"></svg:path><svg:path d="M7 12s-3 2.21-3 3s3 3 3 3"></svg:path></svg:g>`,
})
export class HugeiconsArrowTurnBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

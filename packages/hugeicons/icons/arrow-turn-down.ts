import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowTurnDownIcon],svg[hugeicons-arrow-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 13V8.5a4.5 4.5 0 0 1 9 0V20"></svg:path><svg:path d="M12 17s2.21 3 3 3s3-3 3-3"></svg:path></svg:g>`,
})
export class HugeiconsArrowTurnDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

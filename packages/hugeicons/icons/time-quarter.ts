import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeQuarterIcon],svg[hugeicons-time-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 15q.215.641.5 1.245m1.625 2.501q.476.553 1.016 1.035M9 22a11 11 0 0 1-1.304-.518M12 13.5a1.5 1.5 0 1 0-1.5-1.5m1.5 1.5a1.5 1.5 0 0 1-1.5-1.5m1.5 1.5V16m-1.5-4H6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path></svg:g>`,
})
export class HugeiconsTimeQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

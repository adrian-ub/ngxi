import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHangingClockIcon],svg[hugeicons-hanging-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17.5" cy="4.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="15.5" r="4.5"></svg:circle><svg:path d="M2 8h18m-2.5-2v5M2 6v15m0-1C2 13.373 7.373 8 14 8m4.5 8.5l-1-.5v-2"></svg:path></svg:g>`,
})
export class HugeiconsHangingClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

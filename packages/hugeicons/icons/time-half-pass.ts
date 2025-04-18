import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeHalfPassIcon],svg[hugeicons-time-half-pass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.77 2.5q-.41.146-.8.324M5.425 4.466a10 10 0 0 0-.652.624M3.032 7.565q-.28.56-.487 1.157m-.529 2.67c-.022.389-.021.786.002 1.175m.55 2.699q.2.56.464 1.09m1.659 2.387q.366.393.773.746m2.312 1.517A10 10 0 0 0 9 21.5m3 .5c5.523 0 10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path d="M12 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3V16m0-5.5V6"></svg:path></svg:g>`,
})
export class HugeiconsTimeHalfPassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTimerThinIcon],svg[ph-timer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 44a92 92 0 1 0 92 92a92.1 92.1 0 0 0-92-92m0 176a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m42.83-126.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 1 1-5.66-5.66l40-40a4 4 0 0 1 5.66 0M100 16a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhTimerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

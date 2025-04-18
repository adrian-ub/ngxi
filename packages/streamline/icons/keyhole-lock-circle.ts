import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineKeyholeLockCircleIcon],svg[streamline-keyhole-lock-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7 7.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0v2"></svg:path></svg:g>`,
})
export class StreamlineKeyholeLockCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

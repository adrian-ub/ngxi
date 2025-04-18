import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSquareClockIcon],svg[streamline-square-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M7 5.5V7h1.5"></svg:path><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlineSquareClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

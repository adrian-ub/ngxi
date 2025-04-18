import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesStopwatchOutlineIcon],svg[bubbles-stopwatch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 14.25a9 9 0 1 0 18.001 0A9 9 0 0 0 3 14.25M18 7.5l1.875-1.875M19.5 5.25l.75.75M12 5.25V.75m2.25 0h-4.5M12 15l-3.75-4.15"></svg:path>`,
})
export class BubblesStopwatchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

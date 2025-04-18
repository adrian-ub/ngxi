import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStopwatchIcon],svg[tabler-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0-14 0m9.5-2.5L12 13m5-5l1-1m-4-4h-4"></svg:path>`,
})
export class TablerStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

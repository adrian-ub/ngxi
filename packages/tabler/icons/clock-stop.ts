import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockStopIcon],svg[tabler-clock-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-9 9"></svg:path><svg:path d="M12 7v5l1 1m3 3h6v6h-6z"></svg:path></svg:g>`,
})
export class TablerClockStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

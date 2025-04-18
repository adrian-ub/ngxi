import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBusStopIcon],svg[tabler-bus-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm13 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2m-4 0H8"></svg:path><svg:path d="m16 5l1.5 7H22M9.5 10H17m-5-5v5M5 9v11"></svg:path></svg:g>`,
})
export class TablerBusStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

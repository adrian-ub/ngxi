import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockPinIcon],svg[tabler-clock-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.971 11.278a9 9 0 1 0-8.313 9.698"></svg:path><svg:path d="M12 7v5l1.5 1.5m7.621 6.621a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"></svg:path></svg:g>`,
})
export class TablerClockPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockShieldIcon],svg[tabler-clock-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-8.98 9"></svg:path><svg:path d="M12 7v5l1 1m9 3c0 4-2.5 6-3.5 6S15 20 15 16c1 0 2.5-.5 3.5-1.5c1 1 2.5 1.5 3.5 1.5"></svg:path></svg:g>`,
})
export class TablerClockShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

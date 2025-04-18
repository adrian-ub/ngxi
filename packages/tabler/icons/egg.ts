import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEggIcon],svg[tabler-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14.083c0 4.154-2.966 6.74-7 6.917c-4.2 0-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3s7 5.545 7 11.083"></svg:path>`,
})
export class TablerEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

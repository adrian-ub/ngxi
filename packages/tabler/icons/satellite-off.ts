import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSatelliteOffIcon],svg[tabler-satellite-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.707 3.707l5.586 5.586M12 12l-1.293 1.293a1 1 0 0 1-1.414 0L3.707 7.707a1 1 0 0 1 0-1.414L5 5m1 5l-3 3l3 3l3-3m1-7l3-3l3 3l-3 3m-1 3l1.5 1.5m1 3.5c.69 0 1.316-.28 1.769-.733M15 21c1.654 0 3.151-.67 4.237-1.752m1.507-2.507A6 6 0 0 0 21 15M3 3l18 18"></svg:path>`,
})
export class TablerSatelliteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

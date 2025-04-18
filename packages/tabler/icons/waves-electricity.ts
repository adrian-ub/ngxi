import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWavesElectricityIcon],svg[tabler-waves-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12c.576-.643 1.512-1.017 2.5-1c.988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M3 16c.576-.643 1.512-1.017 2.5-1c.988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M3 8c.576-.643 1.512-1.017 2.5-1c.988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1m7-1l-3 5h4l-3 5"></svg:path>`,
})
export class TablerWavesElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

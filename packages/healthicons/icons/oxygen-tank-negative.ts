import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsOxygenTankNegativeIcon],svg[healthicons-oxygen-tank-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOxygenTankNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM17 6.048h2v-2h-6v2h2v2h-2.17a3.001 3.001 0 1 0 0 2H15v2.083a6 6 0 0 0-5 5.917v2h12v-2a6 6 0 0 0-5-5.917v-2.083h5v-2h-5zm-7 37v-21h12v21a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1m-1-34a1 1 0 1 1 2 0a1 1 0 0 1-2 0m21 8a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0v-6a4 4 0 0 0-4-4m-2 4a2 2 0 1 1 4 0v6a2 2 0 0 1-4 0zm10 5h-3v-2h3a3 3 0 1 1 0 6a1 1 0 0 0-1 1v1h4v2h-5a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOxygenTankNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOxygenTankNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

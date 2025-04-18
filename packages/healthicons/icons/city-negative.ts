import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCityNegativeIcon],svg[healthicons-city-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsCityNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 42a1 1 0 1 0 0 2h30a1 1 0 1 0 0-2h-1V25a1 1 0 0 0-1-1h-4V10L17 4v16h-2v-7h-2v7h-2a1 1 0 0 0-1 1v21zm3-20v20h5V22zm24 20h-2v-2h-3v2h-2V26h7zM22 13h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-10 4h2v2h-2zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-10 4h2v2h-2zm6 0h-2v2h2zm-4 4h-2v2h2zm2 0h2v2h-2zm-4 4h2v2h-2zm6 0h-2v2h2zm-4 4h-2v2h2zm2 0h2v2h-2zm7-7h3v-2h-3zm3 4h-3v-2h3zm-3 4h3v-2h-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCityNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCityNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

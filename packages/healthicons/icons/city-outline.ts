import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCityOutlineIcon],svg[healthicons-city-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22 13h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-10 4h2v2h-2zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4h-2v2h2zm2 0h2v2h-2zm6 0h-2v2h2zm-10 4h2v2h-2zm6 0h-2v2h2zm-6 4h2v2h-2zm6 0h-2v2h2zm-6 4h2v2h-2zm6 0h-2v2h2zm-6 4h2v2h-2zm6 0h-2v2h2zm5-7h3v-2h-3zm3 4h-3v-2h3zm-3 4h3v-2h-3z"></svg:path><svg:path fill-rule="evenodd" d="m17 4l16 6v14h4a1 1 0 0 1 1 1v17h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1V21a1 1 0 0 1 1-1h2v-7h2v7h2zm2 2.886l12 4.5V24h-3a1 1 0 0 0-1 1v17h-8zM12 22v20h5V22zm24 20h-2v-2h-3v2h-2V26h7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsCityOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

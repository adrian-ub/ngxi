import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsClinicalFeNegativeIcon],svg[healthicons-clinical-fe-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsClinicalFeNegative0)"><svg:path d="M14 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1zm0 9v3h-3v2h3v3h2v-3h3v-2h-3v-3zm-2 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM15 6a3 3 0 0 0-3 3H9a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3zm21 12a3 3 0 1 1 6 0v3h-6zm0 20V23h6v15l-3 4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsClinicalFeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsClinicalFeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

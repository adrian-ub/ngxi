import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalIcon],svg[healthicons-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 20h4v3h-4zm4 5h-4v3h4zm-4 5h4v3h-4zm10-10h-4v3h4zm-4 5h4v3h-4zm4 5h-4v3h4zm2-10h4v3h-4zm4 5h-4v3h4zm-4 5h4v3h-4z"></svg:path><svg:path fill-rule="evenodd" d="M31 6a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2h-7v2h2v34H9a1 1 0 1 0 0 2h30a1 1 0 1 0 0-2h-3V8h2V6zm-2 12a2 2 0 0 0 2-2v-5h3v31h-3v-4h1v-2H16v2h1v4h-3V11h3v5a2 2 0 0 0 2 2zm-6 24h2v-4h-2zM34 8v1h-3V8zM14 9h3V8h-3zm6 1h3V7h2v3h3v2h-3v3h-2v-3h-3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHospitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

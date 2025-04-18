import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsClinicalAIcon],svg[healthicons-clinical-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2.273a1.5 1.5 0 0 0-1 1.415V39a5 5 0 0 0 10 0V12.688a1.5 1.5 0 0 0-1-1.415V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm3 7.688V9h4v2.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898a1.5 1.5 0 0 0 1-1.415" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsClinicalAIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

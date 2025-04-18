import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalizedNegativeIcon],svg[healthicons-hospitalized-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsHospitalizedNegative0)"><svg:path d="m18.117 21.188l.364-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.77 1.77 0 0 0-2.504-.002l-.35.35zM36 31v3H11v-8.644l5.275 5.311c.212.213.498.333.797.333z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm29 8V6h2v2a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v12.578a3.97 3.97 0 0 1 2 3.455C42 29.223 40.239 31 38.066 31H38v3h4v2h-3.05a3.5 3.5 0 1 1-4.899 0H13.95a3.5 3.5 0 1 1-4.899 0H6v-2h3V23.343l-.833-.839a4.034 4.034 0 0 1 0-5.676a3.95 3.95 0 0 1 3.892-1.021l.704-.704a3.77 3.77 0 0 1 5.333.002l1.8 1.801a3.77 3.77 0 0 1-.002 5.333l-.368.368l.366.369c.058.058.137.09.218.09H38V11h-5v1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h1v-1.17A3 3 0 0 1 29 8" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHospitalizedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHospitalizedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

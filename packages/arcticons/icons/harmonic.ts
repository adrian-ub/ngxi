import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHarmonicIcon],svg[arcticons-harmonic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 24.452s18.03-28.31 39-.432"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 24.02c-18.292 43.075-20.713-43.01-39 .432c10.75-34.832 12.645 12.14 19.198 12.183c8.159.054 9.35-47.193 19.802-12.615"></svg:path>`,
})
export class ArcticonsHarmonicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

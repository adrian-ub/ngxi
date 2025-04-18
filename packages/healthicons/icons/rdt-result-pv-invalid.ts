import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRdtResultPvInvalidIcon],svg[healthicons-rdt-result-pv-invalid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H29v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M11.593 11.026a1.2 1.2 0 0 0-.742.079a1.4 1.4 0 0 0-.609.537A1.6 1.6 0 0 0 10 12.5c0 .31.087.61.242.858c.156.248.37.432.609.537c.237.105.494.131.742.079s.485-.185.677-.39a1 1 0 0 1 1.46 1.368a3.3 3.3 0 0 1-1.722.978a3.2 3.2 0 0 1-1.966-.206a3.4 3.4 0 0 1-1.495-1.304A3.6 3.6 0 0 1 8 12.5c0-.678.188-1.346.547-1.92a3.4 3.4 0 0 1 1.495-1.304a3.2 3.2 0 0 1 1.966-.206c.661.14 1.259.485 1.722.978a1 1 0 1 1-1.46 1.368a1.3 1.3 0 0 0-.677-.39"></svg:path><svg:path fill-rule="evenodd" d="M14 32a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5zm2.5 3H15v-1h1.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path><svg:path d="M23.436 38.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503l.564-1.503a1 1 0 1 1 1.872.702zM35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2a1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.1 2.1 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1m-22 7h-2a1 1 0 1 0 0 2h2zm2 0v2h7v-2zm9 2h2a1 1 0 1 0 0-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M10 30a6 6 0 0 1 0-12h28a6 6 0 0 1 0 12zm30-6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M26 21a3 3 0 1 1 0 6H11a3 3 0 1 1 0-6z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsRdtResultPvInvalidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

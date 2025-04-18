import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidVaccineProtectionMedicinePillIcon],svg[covid-vaccine-protection-medicine-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.6 16.4a4.6 4.6 0 0 1-6.5-6.5l7.8-7.8a4.6 4.6 0 0 1 6.5 6.5M5.999 5.999l4.25 4.25"></svg:path><svg:path d="M23.25 15.75a7.67 7.67 0 0 1-6 7.5a7.67 7.67 0 0 1-6-7.5V13.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5zm-6-.75v4.5M15 17.25h4.5"></svg:path></svg:g>`,
})
export class CovidVaccineProtectionMedicinePillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

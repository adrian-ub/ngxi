import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidVaccineProtectionFaceMask3Icon],svg[covid-vaccine-protection-face-mask-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 11.127a39 39 0 0 1 5-.5m-5 4.125c1.65.31 3.322.477 5 .5"></svg:path><svg:path d="M12 19.5c2.743.074 5.47-.437 8-1.5V9s-4.9-4.5-8-4.5S4 9 4 9v9a19.3 19.3 0 0 0 8 1.5"></svg:path><svg:path d="M17 11.127a39 39 0 0 0-5-.5m5 4.125c-1.65.31-3.322.477-5 .5M4 18a6.83 6.83 0 0 1-3.25-5.814V8.054a1.08 1.08 0 0 1 1.166-1.08A1.47 1.47 0 0 1 3 7.59L4 9m16 9a6.83 6.83 0 0 0 3.25-5.816v-4.13a1.083 1.083 0 0 0-1.166-1.08A1.47 1.47 0 0 0 21 7.59L20 9"></svg:path></svg:g>`,
})
export class CovidVaccineProtectionFaceMask3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

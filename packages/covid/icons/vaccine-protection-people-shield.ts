import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidVaccineProtectionPeopleShieldIcon],svg[covid-vaccine-protection-people-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.75 20.893a3.143 3.143 0 1 0 0-6.286a3.143 3.143 0 0 0 0 6.286m-.524-8.643h1.048m-.524 0v2.357m3.519-1.116l.74.74m-.37-.37l-1.667 1.667m3.278 1.698v1.048m0-.524h-2.357m1.116 3.519l-.74.74m.37-.37l-1.667-1.667m-1.698 3.278h-1.048m.524 0v-2.357m-3.519 1.116l-.74-.74m.37.37l1.667-1.667m-3.278-1.698v-1.048m0 .524h2.357m-1.116-3.519l.74-.74m-.37.37l1.667 1.667"></svg:path><svg:path d="M19.25 8.25V3.76a1.41 1.41 0 0 0-.823-1.292A20.6 20.6 0 0 0 10 .75a20.6 20.6 0 0 0-8.427 1.718A1.41 1.41 0 0 0 .75 3.76v7.224c0 3.532 1.546 8.352 8.228 10.922a2.85 2.85 0 0 0 2.044 0"></svg:path><svg:path d="M10.147 9.996a2.791 2.791 0 1 0 0-5.582a2.791 2.791 0 0 0 0 5.582m1.72 1.74a4.57 4.57 0 0 0-6.288 4.233"></svg:path></svg:g>`,
})
export class CovidVaccineProtectionPeopleShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

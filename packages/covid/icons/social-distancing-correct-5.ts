import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingCorrect5Icon],svg[covid-social-distancing-correct-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.5 19.375a3.375 3.375 0 1 0 0-6.75a3.375 3.375 0 0 0 0 6.75m4.75 3.75a6.027 6.027 0 0 0-9.5 0"></svg:path><svg:path d="M21.875 16.111a6.76 6.76 0 0 1-6.443-1.511M5.5 19.375a3.375 3.375 0 1 0 0-6.75a3.375 3.375 0 0 0 0 6.75m4.749 3.75a6.026 6.026 0 0 0-9.5 0"></svg:path><svg:path d="M8.875 16.111A6.76 6.76 0 0 1 2.432 14.6M.75 6.875h3.5m-1.5 2l-2-2l2-2m20.5 2h-3.5m1.5 2l2-2l-2-2m-9.25 6a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="m10 6.375l1.083 1.083a.5.5 0 0 0 .76-.063L14 4.375"></svg:path></svg:g>`,
})
export class CovidSocialDistancingCorrect5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

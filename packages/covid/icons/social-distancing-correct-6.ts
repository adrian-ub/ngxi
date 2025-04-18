import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingCorrect6Icon],svg[covid-social-distancing-correct-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.974 19.375a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.226 3.75a4.473 4.473 0 0 0-8.449 0m18.275-3.75a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.224 3.75a4.473 4.473 0 0 0-8.449 0M.75 6.875h3.5m-1.5 2l-2-2l2-2m20.5 2h-3.5m1.5 2l2-2l-2-2m-9.25 6a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="m10 6.375l1.083 1.083a.5.5 0 0 0 .76-.063L14 4.375"></svg:path></svg:g>`,
})
export class CovidSocialDistancingCorrect6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

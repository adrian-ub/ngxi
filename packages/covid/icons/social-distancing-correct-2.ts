import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingCorrect2Icon],svg[covid-social-distancing-correct-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.974 19.375a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.226 3.75a4.473 4.473 0 0 0-8.449 0m18.275-3.75a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.224 3.75a4.473 4.473 0 0 0-8.449 0M5 8.875v2m14-2v2m-14-1h14m-10-7l2 2l4-4"></svg:path>`,
})
export class CovidSocialDistancingCorrect2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

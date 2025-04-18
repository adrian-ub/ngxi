import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancing2Icon],svg[covid-social-distancing-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.974 17.375a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.226 3.75a4.473 4.473 0 0 0-8.449 0m18.275-3.75a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.224 3.75a4.473 4.473 0 0 0-8.449 0"></svg:path><svg:path d="M6 3.75A.375.375 0 1 1 6 3m0 .75A.375.375 0 1 0 6 3m6 .75A.375.375 0 0 1 12 3m0 .75A.375.375 0 0 0 12 3m6 .75A.375.375 0 0 1 18 3m0 .75A.375.375 0 0 0 18 3"></svg:path></svg:g>`,
})
export class CovidSocialDistancing2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

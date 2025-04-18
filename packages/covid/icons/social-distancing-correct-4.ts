import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingCorrect4Icon],svg[covid-social-distancing-correct-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5.089 19.288a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.224 3.75a4.474 4.474 0 0 0-8.449 0m18.026-17a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25m4.224 3.75a4.474 4.474 0 0 0-8.448 0"></svg:path><svg:path d="M11.614 19.913a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m3-2.25a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m3-2.25a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5.386 9.962a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.586 5.912l.974.974a.45.45 0 0 0 .684-.056l1.942-2.718"></svg:path></svg:g>`,
})
export class CovidSocialDistancingCorrect4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

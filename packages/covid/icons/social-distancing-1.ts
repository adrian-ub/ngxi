import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancing1Icon],svg[covid-social-distancing-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18.5 17.375a3.375 3.375 0 1 0 0-6.75a3.375 3.375 0 0 0 0 6.75m4.75 3.75a6.027 6.027 0 0 0-9.5 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.875 14.111a6.76 6.76 0 0 1-6.443-1.511M5.5 17.375a3.375 3.375 0 1 0 0-6.75a3.375 3.375 0 0 0 0 6.75m4.749 3.75a6.026 6.026 0 0 0-9.5 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.875 14.111A6.76 6.76 0 0 1 2.432 12.6"></svg:path><svg:path d="M5.875 3.75a.375.375 0 1 1 0-.75m0 .75a.375.375 0 1 0 0-.75M12 3.75A.375.375 0 0 1 12 3m0 .75A.375.375 0 0 0 12 3m6.125.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidSocialDistancing1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

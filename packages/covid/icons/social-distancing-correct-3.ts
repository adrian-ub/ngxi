import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingCorrect3Icon],svg[covid-social-distancing-correct-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18.5 7.538a3.375 3.375 0 1 0 0-6.75a3.375 3.375 0 0 0 0 6.75m4.75 3.75a6.027 6.027 0 0 0-9.5 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.875 4.275A6.8 6.8 0 0 1 20 4.538a6.73 6.73 0 0 1-4.568-1.78M5.5 19.288a3.375 3.375 0 1 0 0-6.75a3.375 3.375 0 0 0 0 6.75m4.749 3.75a6.026 6.026 0 0 0-9.5 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.875 16.024a6.76 6.76 0 0 1-6.443-1.516m2.839-4.546a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.471 5.912l.975.974a.45.45 0 0 0 .684-.056l1.941-2.718"></svg:path><svg:path d="M12.5 19.788a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m3-2.125a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m3-2.125a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidSocialDistancingCorrect3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

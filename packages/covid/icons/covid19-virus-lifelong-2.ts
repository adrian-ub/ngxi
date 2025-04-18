import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidCovid19VirusLifelong2Icon],svg[covid-covid19-virus-lifelong-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.017.767H8.983m1.517 0v2.6M4.678 2.55L3.606 3.622L2.533 4.695m1.073-1.073l1.838 1.839M.75 9v3.033m0-1.516h2.6m-.817 5.821l1.073 1.073l1.072 1.072m-1.072-1.072l1.838-1.839M18.467 4.695l-1.073-1.073l-1.072-1.072m1.072 1.072l-1.838 1.839M8.983 9.867a1.517 1.517 0 1 0 0-3.034a1.517 1.517 0 0 0 0 3.034"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.356 8.483a7.15 7.15 0 1 0-8.889 8.884"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.25 23.233a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.902 17.233H17.25v-2.651"></svg:path><svg:path d="M9.417 13.367a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidCovid19VirusLifelong2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

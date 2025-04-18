import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidCovid19VirusHeal2Icon],svg[covid-covid19-virus-heal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.017.75H8.983m1.517 0v2.6m-5.822-.817L3.606 3.606L2.533 4.678m1.073-1.072l1.838 1.838M.75 8.983v3.034m0-1.517h2.6m-.817 5.822l1.073 1.072l1.072 1.073m-1.072-1.073l1.838-1.838M18.467 4.678l-1.073-1.072l-1.072-1.073m1.072 1.073l-1.838 1.838M8.983 9.85a1.517 1.517 0 1 0 0-3.034a1.517 1.517 0 0 0 0 3.034"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.61 9.75a7.15 7.15 0 1 0-7.982 7.842m13.622-.342a1 1 0 0 0-1-1h-2.5v-2.5a1 1 0 0 0-1-1h-1.5a1 1 0 0 0-1 1v2.5h-2.5a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h2.5v2.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-2.5h2.5a1 1 0 0 0 1-1z"></svg:path><svg:path d="M10.208 14.434a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidCovid19VirusHeal2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

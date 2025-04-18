import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidCovid19VirusReinfectedIcon],svg[covid-covid19-virus-reinfected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="covidCovid19VirusReinfected0" d="m15.664 13.654l-2.914 2.914l2.914 2.914"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.017.75H8.983m1.517 0v2.6m-5.822-.817L3.606 3.606L2.533 4.678m1.073-1.072l1.838 1.838M.75 8.983v3.034m0-1.517h2.6m-.817 5.822l1.073 1.072l1.072 1.073m-1.072-1.073l1.838-1.838M18.467 4.678l-1.073-1.072l-1.072-1.073m1.072 1.073l-1.838 1.838M8.983 9.85a1.517 1.517 0 1 0 0-3.034a1.517 1.517 0 0 0 0 3.034"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.61 9.75a7.15 7.15 0 0 0-1.485-3.668c-2.593-3.305-7.64-3.631-10.637-.687c-2.971 2.919-2.764 7.993.5 10.647a7.15 7.15 0 0 0 3.64 1.55m3.122-1.024h7.159a3.341 3.341 0 1 1 0 6.682h-6.2"></svg:path><svg:use href="#covidCovid19VirusReinfected0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.75 16.568h7.159a3.341 3.341 0 1 1 0 6.682h-6.2"></svg:path><svg:use href="#covidCovid19VirusReinfected0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path d="M10.15 14.492a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidCovid19VirusReinfectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

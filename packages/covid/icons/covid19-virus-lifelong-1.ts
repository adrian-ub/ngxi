import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidCovid19VirusLifelong1Icon],svg[covid-covid19-virus-lifelong-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.167 15.286a3.286 3.286 0 1 0 0-6.572a3.286 3.286 0 0 0 0 6.572m-.548-9.036h1.095m-.547 0v2.464m3.678-1.167l.775.774m-.387-.387L13.49 9.677m3.427 1.775v1.096m0-.548h-2.465m1.168 3.679l-.775.774m.388-.387l-1.743-1.743m-1.776 3.427h-1.095m.548 0v-2.464m-3.679 1.167l-.774-.774m.387.387l1.742-1.743m-3.426-1.775v-1.096m0 .548h2.464M6.714 8.321l.774-.774m-.387.387l1.742 1.743"></svg:path><svg:path d="M19.673 17.598a10.267 10.267 0 1 1 1.66-5.6v.934"></svg:path><svg:path d="m19.467 11.066l1.867 1.866l1.866-1.866"></svg:path></svg:g>`,
})
export class CovidCovid19VirusLifelong1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidCovid19Virus3Icon],svg[covid-covid19-virus-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.851 4.958L6.215 3.322a2.046 2.046 0 0 0-2.893 2.893l1.6 1.694m11.227 11.133l1.636 1.636a2.046 2.046 0 0 0 2.893-2.893l-1.636-1.636m-14.084 0l-1.636 1.636a2.046 2.046 0 0 0 2.893 2.893l1.636-1.637M19.075 7.909l1.589-1.694a2.047 2.047 0 1 0-2.893-2.893L16.14 4.953"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.205 9.955h-1.291a8.18 8.18 0 0 0-5.869-5.869V2.8a2.045 2.045 0 0 0-4.09 0v1.286a8.18 8.18 0 0 0-5.869 5.869H2.8a2.045 2.045 0 0 0 0 4.09h1.286a8.18 8.18 0 0 0 5.869 5.869v1.291a2.045 2.045 0 0 0 4.09 0v-1.291a8.18 8.18 0 0 0 5.869-5.869h1.291a2.045 2.045 0 1 0 0-4.09"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.534 13.023a2.557 2.557 0 1 0 0-5.114a2.557 2.557 0 0 0 0 5.114"></svg:path><svg:path d="M9.443 15.955a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidCovid19Virus3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

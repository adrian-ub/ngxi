import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidMutationTemperatureChangeIcon],svg[covid-mutation-temperature-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.25 10.179a3.429 3.429 0 1 0 0-6.858a3.429 3.429 0 0 0 0 6.858M16.679.75h1.142m-.571 0v2.571m3.839-1.218l.808.808m-.404-.404l-1.819 1.819m3.576 1.853v1.142m0-.571h-2.571m1.218 3.839l-.808.808m.404-.404l-1.819-1.819m-1.853 3.576h-1.142m.571 0v-2.571m-3.839 1.218l-.808-.808m.404.404l1.819-1.819M11.25 7.321V6.179m0 .571h2.571m-1.218-3.839l.808-.808m-.404.404l1.819 1.819M8.25 15.418V3.75a3 3 0 1 0-6 0v11.668a4.493 4.493 0 1 0 7.5 3.332a4.47 4.47 0 0 0-1.5-3.332m-3-10.168v12"></svg:path><svg:path d="M5.25 20.25a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class CovidMutationTemperatureChangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidTransmissionVirusWindBreathIcon],svg[covid-transmission-virus-wind-breath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 20.679a3.429 3.429 0 1 0 0-6.858a3.429 3.429 0 0 0 0 6.858m-.571-9.429h1.142m-.571 0v2.571m3.839-1.218l.808.808m-.404-.404l-1.819 1.819m3.576 1.853v1.142m0-.571h-2.571m1.218 3.839l-.808.808m.404-.404l-1.819-1.819M7.321 23.25H6.179m.571 0v-2.571m-3.839 1.218l-.808-.808m.404.404l1.819-1.819M.75 17.821v-1.142m0 .571h2.571m-1.218-3.839l.808-.808m-.404.404l1.819 1.819M18.25 3.25a2.5 2.5 0 1 1 2.5 2.5H1.25m15.5 8.5a2.5 2.5 0 1 0 2.5-2.5h-5m-13-3h16.5"></svg:path>`,
})
export class CovidTransmissionVirusWindBreathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

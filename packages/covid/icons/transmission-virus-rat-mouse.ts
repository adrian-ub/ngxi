import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidTransmissionVirusRatMouseIcon],svg[covid-transmission-virus-rat-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 20.429a3.429 3.429 0 1 0 0-6.858a3.429 3.429 0 0 0 0 6.858M6.429 11h1.142M7 11v2.571m3.839-1.218l.808.808m-.404-.404l-1.819 1.819M13 16.429v1.142M13 17h-2.571m1.218 3.839l-.808.808m.404-.404l-1.819-1.819M7.571 23H6.429M7 23v-2.571m-3.839 1.218l-.808-.808m.404.404l1.819-1.819M1 17.571v-1.142M1 17h2.571m-1.218-3.839l.808-.808m-.404.404l1.819 1.819M15.75 13h6a1.5 1.5 0 0 0 0-3c-1 0-.131.495-4.3-2.844A4.1 4.1 0 0 0 13.875 1A4.183 4.183 0 0 0 9.75 5.125a4.12 4.12 0 0 0 1.5 3.179M8.336 1.127A7 7 0 0 0 7 1a6 6 0 0 0-5.2 9"></svg:path><svg:path d="M16.125 9.25a.375.375 0 0 1 .375.375m-.75 0a.375.375 0 0 1 .375-.375m0 .75a.375.375 0 0 1-.375-.375m.75 0a.375.375 0 0 1-.375.375"></svg:path></svg:g>`,
})
export class CovidTransmissionVirusRatMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

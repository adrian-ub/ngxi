import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneHandSanitizerVirusShieldIcon],svg[covid-personal-hygiene-hand-sanitizer-virus-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.319 21.66H2.912A2.16 2.16 0 0 1 .75 19.5V8.685a2.16 2.16 0 0 1 2.162-2.162h7.9a2.16 2.16 0 0 1 2.162 2.162v.747"></svg:path><svg:path d="M3.994 1.117h5.741A1.08 1.08 0 0 1 10.816 2.2v4.323h-7.9V2.2a1.08 1.08 0 0 1 1.078-1.083M.75 10.848h8.315M.75 17.335h6.487m16.013-1.789a7.5 7.5 0 0 1-5.87 7.337a7.5 7.5 0 0 1-5.869-7.337v-2.2a1.467 1.467 0 0 1 1.467-1.467h8.805a1.467 1.467 0 0 1 1.467 1.467zm-5.87-.733v4.402m-2.201-2.201h4.403"></svg:path></svg:g>`,
})
export class CovidPersonalHygieneHandSanitizerVirusShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

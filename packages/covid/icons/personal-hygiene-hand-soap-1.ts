import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneHandSoap1Icon],svg[covid-personal-hygiene-hand-soap-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75 21.252h1.9c.233 0 .463.054.671.158l1.733.867a4.5 4.5 0 0 0 2.012.475H18.75a1.5 1.5 0 1 0 0-3H21a1.5 1.5 0 1 0 0-3h.75a1.5 1.5 0 1 0 0-3h-1.5a1.5 1.5 0 1 0 0-3H15a1.5 1.5 0 1 0 0-3H9.158a4.5 4.5 0 0 0-3.744 2L4.2 11.584a1.5 1.5 0 0 1-1.248.668H.75m12-1.5H15m1.5 6H21m-4.5-3h3.75m-4.5 6h3M23 8.248a1.99 1.99 0 0 0-2.146-1.985c.093-.33.142-.672.146-1.015a3.99 3.99 0 0 0-7.2-2.383a2.986 2.986 0 0 0-3.8.147"></svg:path>`,
})
export class CovidPersonalHygieneHandSoap1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

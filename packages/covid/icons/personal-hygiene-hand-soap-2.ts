import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneHandSoap2Icon],svg[covid-personal-hygiene-hand-soap-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.928 7.272H4.89a3.36 3.36 0 0 0-3.358 3.358v9.236a3.36 3.36 0 0 0 3.358 3.358h5.038a3.36 3.36 0 0 0 3.359-3.358V10.63a3.36 3.36 0 0 0-3.359-3.358"></svg:path><svg:path d="M16.488 14.572a2.992 2.992 0 0 0 3.085-4.962a4.967 4.967 0 0 0-7.215-6.698a2.983 2.983 0 0 0-5.844.863m13.961 18.452a1.994 1.994 0 1 0 0-3.987a1.994 1.994 0 0 0 0 3.987M7.514 13.254v3.988M5.52 15.249h3.988"></svg:path></svg:g>`,
})
export class CovidPersonalHygieneHandSoap2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

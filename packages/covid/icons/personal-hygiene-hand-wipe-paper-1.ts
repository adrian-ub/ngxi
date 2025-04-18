import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneHandWipePaper1Icon],svg[covid-personal-hygiene-hand-wipe-paper-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M23.25 15.3h-1.611a1.1 1.1 0 0 1-.916-.49l-.893-1.341A3.3 3.3 0 0 0 17.084 12H12.75v3h-3.8a1.1 1.1 0 0 0-1.1 1.1l1.1 5.8a1.1 1.1 0 0 0 1.1 1.1h8.571a3.3 3.3 0 0 0 1.476-.348l1.271-.636a1.1 1.1 0 0 1 .492-.116h1.39M2.75 9c1.105 0 2-1.79 2-4s-.895-4-2-4s-2 1.79-2 4s.895 4 2 4"></svg:path><svg:path d="M2.75 9h10c1.1 0 2-1.791 2-4s-.9-4-2-4h-10m3 19l-2-1l-3 1V5m12 4v3"></svg:path></svg:g>`,
})
export class CovidPersonalHygieneHandWipePaper1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

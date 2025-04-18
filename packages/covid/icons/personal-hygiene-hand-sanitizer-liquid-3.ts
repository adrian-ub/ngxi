import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneHandSanitizerLiquid3Icon],svg[covid-personal-hygiene-hand-sanitizer-liquid-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.125 20.076a6.505 6.505 0 0 1-8-6.326c0-4.875 6.5-13 6.5-13a46.4 46.4 0 0 1 5.306 8.5"></svg:path><svg:path d="M22.875 15.75a7.67 7.67 0 0 1-6 7.5a7.67 7.67 0 0 1-6-7.5V13.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5zm-6-.75v4.5m-2.25-2.25h4.5m-11.5 0a3.5 3.5 0 0 1-3.5-3.5"></svg:path></svg:g>`,
})
export class CovidPersonalHygieneHandSanitizerLiquid3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

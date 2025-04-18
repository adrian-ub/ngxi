import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidPersonalHygieneHandSanitizerSprayIcon],svg[covid-personal-hygiene-hand-sanitizer-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.456 8.843H4.281a2.06 2.06 0 0 0-2.058 2.058v10.291c0 1.137.921 2.058 2.058 2.058h6.175a2.06 2.06 0 0 0 2.058-2.058V10.901a2.06 2.06 0 0 0-2.058-2.058M5.079 1.871h4.58a.8.8 0 0 1 .8.8v6.172H4.282V2.668a.8.8 0 0 1 .8-.8zm2.29 12.117v4.116m-2.058-2.058h4.116"></svg:path><svg:path d="M21.356 5.71a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-1.217 5.052a.375.375 0 1 1 0-.75m0 .75a.375.375 0 1 0 0-.75m0-7.67a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75M16.21 4.118a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m0 4.118a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidPersonalHygieneHandSanitizerSprayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

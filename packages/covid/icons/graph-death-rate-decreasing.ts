import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidGraphDeathRateDecreasingIcon],svg[covid-graph-death-rate-decreasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.777 6.375a4.875 4.875 0 1 0-7.877 3.816v.309a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-.309a4.85 4.85 0 0 0 1.877-3.816M16.902 10.5V12m4.875 10.5h-21v-21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M.777 9.5h1.4a10.83 10.83 0 0 1 8.6 4.25a10.82 10.82 0 0 0 8.6 4.25h3.846"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.833 15.609L23.223 18l-2.39 2.391"></svg:path><svg:path d="M18.777 7.113a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-3.752.75a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class CovidGraphDeathRateDecreasingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

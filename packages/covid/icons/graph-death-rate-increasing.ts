import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidGraphDeathRateIncreasingIcon],svg[covid-graph-death-rate-increasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.753 22.5h-21v-21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.378 6.375A4.876 4.876 0 1 0 7.5 10.191v.309A1.5 1.5 0 0 0 9 12h3a1.5 1.5 0 0 0 1.5-1.5v-.309a4.85 4.85 0 0 0 1.878-3.816M10.503 10.5V12M.758 19.512h2.7c8.894 0 16.064-3.387 17.954-12.762"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.574 8.582l2.841-1.832l1.832 2.842"></svg:path><svg:path d="M12.378 7.125a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75m-3.752.75a.375.375 0 1 1 0-.75m0 .75a.375.375 0 1 0 0-.75"></svg:path></svg:g>`,
})
export class CovidGraphDeathRateIncreasingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidGraphCuredIncreasingIcon],svg[covid-graph-cured-increasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.755 22.5h-21v-21"></svg:path><svg:path d="M15.755 6a1 1 0 0 0-1-1h-2.5V2.5a1 1 0 0 0-1-1h-1.5a1 1 0 0 0-1 1V5h-2.5a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h2.5V11a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V8.5h2.5a1 1 0 0 0 1-1zm-15 13.512h2.7c8.9 0 16.065-3.387 17.955-12.762"></svg:path><svg:path d="m18.571 8.582l2.842-1.832l1.832 2.842"></svg:path></svg:g>`,
})
export class CovidGraphCuredIncreasingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

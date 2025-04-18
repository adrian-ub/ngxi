import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidGraphInfectedIncreasingIcon],svg[covid-graph-infected-increasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.755 22.5h-21v-21"></svg:path><svg:path d="M.755 19.5h2.7c8.9 0 16.065-3.387 17.955-12.762M10.505 9.75a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-.5-8.25h1m-.5 0v2.25m3.359-1.066l.707.707m-.354-.353l-1.591 1.591m3.129 1.621v1m0-.5h-2.25m1.066 3.359l-.707.707m.353-.354l-1.591-1.591M11.005 12h-1m.5 0V9.75m-3.359 1.066l-.707-.707m.354.353l1.591-1.591M5.255 7.25v-1m0 .5h2.25M6.439 3.391l.707-.707m-.353.354l1.591 1.591"></svg:path><svg:path d="m18.571 8.57l2.842-1.832l1.832 2.842"></svg:path></svg:g>`,
})
export class CovidGraphInfectedIncreasingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

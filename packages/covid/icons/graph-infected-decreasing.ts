import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidGraphInfectedDecreasingIcon],svg[covid-graph-infected-decreasing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.777 22.5h-21v-21m15.75 8.25a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-.5-8.25h1m-.5 0v2.25m3.359-1.066l.707.707m-.354-.353l-1.591 1.591m3.129 1.621v1m0-.5h-2.25m1.066 3.359l-.707.707m.353-.354l-1.591-1.591M17.027 12h-1m.5 0V9.75m-3.359 1.066l-.707-.707m.353.353l1.591-1.591M11.277 7.25v-1m0 .5h2.25m-1.066-3.359l.707-.707m-.354.354l1.591 1.591"></svg:path><svg:path d="M.777 8.875h1.4a10.83 10.83 0 0 1 8.6 4.25a10.82 10.82 0 0 0 8.6 4.25h3.846"></svg:path><svg:path d="m20.833 14.984l2.39 2.391l-2.39 2.391"></svg:path></svg:g>`,
})
export class CovidGraphInfectedDecreasingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

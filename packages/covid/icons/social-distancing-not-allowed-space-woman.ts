import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingNotAllowedSpaceWomanIcon],svg[covid-social-distancing-not-allowed-space-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m1 19.05l4 4m0-4l-4 4m18-4l4 4m0-4l-4 4m-7-16.3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M9.114 9.114A5.25 5.25 0 0 0 6.75 13.5v2.25H9l.75 7.5h4.5l.75-7.5h2.25V13.5a5.25 5.25 0 0 0-2.364-4.386L12 13.5z"></svg:path><svg:path d="M9 3.75S9 7.5 6.75 7.5M15 3.75s0 3.75 2.25 3.75"></svg:path></svg:g>`,
})
export class CovidSocialDistancingNotAllowedSpaceWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

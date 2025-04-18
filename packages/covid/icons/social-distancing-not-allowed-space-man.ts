import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingNotAllowedSpaceManIcon],svg[covid-social-distancing-not-allowed-space-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.75a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5.25 6.75a5.25 5.25 0 1 0-10.5 0v2.25H9l.75 7.5h4.5l.75-7.5h2.25zM1 18.991l4 4m0-4l-4 4m18-4l4 4m0-4l-4 4"></svg:path>`,
})
export class CovidSocialDistancingNotAllowedSpaceManIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderToiletSignManWomanToiletSignRestroomBathroomUserHumanPersonIcon],svg[streamline-travel-wayfinder-toilet-sign-man-woman-toilet-sign-restroom-bathroom-user-human-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="11" cy="2.5" r="2"></svg:circle><svg:path d="M11 6.5c-2.5 0-2.5 7-2.5 7h5s0-7-2.5-7Z"></svg:path><svg:circle cx="3" cy="2.5" r="2"></svg:circle><svg:path d="M3 13.5c-2.5 0-2.5-7-2.5-7h5s0 7-2.5 7Z"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderToiletSignManWomanToiletSignRestroomBathroomUserHumanPersonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

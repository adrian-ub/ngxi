import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderToiltetSignWomanToiletSignRestroomBathroomUserHumanPersonWomanFemaleIcon],svg[streamline-travel-wayfinder-toiltet-sign-woman-toilet-sign-restroom-bathroom-user-human-person-woman-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="2.5" r="2"></svg:circle><svg:path d="M7 6.5c-3 0-3 7-3 7h6s0-7-3-7Z"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderToiltetSignWomanToiletSignRestroomBathroomUserHumanPersonWomanFemaleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

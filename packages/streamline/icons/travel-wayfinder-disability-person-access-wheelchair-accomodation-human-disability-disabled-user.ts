import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderDisabilityPersonAccessWheelchairAccomodationHumanDisabilityDisabledUserIcon],svg[streamline-travel-wayfinder-disability-person-access-wheelchair-accomodation-human-disability-disabled-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="8" cy="2.5" r="2"></svg:circle><svg:path d="M8 4.5v4h3a1 1 0 0 1 1 1v4m-6.5-7a3.5 3.5 0 1 0 3.22 4.88"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderDisabilityPersonAccessWheelchairAccomodationHumanDisabilityDisabledUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

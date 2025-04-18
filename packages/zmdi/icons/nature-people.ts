import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNaturePeopleIcon],svg[zmdi-nature-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430 156q0 57-37.5 99T299 304v83h64v42H21V323H0v-86q0-8 6.5-14.5T21 216h64q9 0 15.5 6.5T107 237v86H85v64h171v-84q-53-9-88.5-50.5T132 156q0-62 43.5-106T281 6t105.5 44T430 156M53.5 195q-13.5 0-23-9.5t-9.5-23t9.5-22.5t23-9t22.5 9t9 22.5t-9 23t-22.5 9.5"></svg:path>`,
})
export class ZmdiNaturePeopleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

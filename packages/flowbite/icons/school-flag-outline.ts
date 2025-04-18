import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolFlagOutlineIcon],svg[flowbite-school-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20v-9l-4 1.125V20zm0 0h8m-8 0V6.667M16 20v-9l4 1.125V20zm0 0V7m0 0V4h4v3zM6 8l6-4l4 2.667M11 9h2m-2 3h2"></svg:path>`,
})
export class FlowbiteSchoolFlagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

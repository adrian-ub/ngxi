import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolCheckOutlineIcon],svg[flowbite-school-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.143 20v-9l-4 1.125V20zm0 0V6.667m0 13.333h3m5-9V6.667m0 4.333l4 1.125V13m-4-2v3m2-6l-6-4l-6 4m5 1h2m-2 3h2m1 6l2 2l4-4"></svg:path>`,
})
export class FlowbiteSchoolCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

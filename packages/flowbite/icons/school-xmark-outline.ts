import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolXmarkOutlineIcon],svg[flowbite-school-xmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.071 20v-9l-4 1.125V20zm0 0V6.667m0 13.333h4m4-9V6.667m0 4.333l4 1.125V13m-4-2v2m2-5l-6-4l-6 4m5 1h2m-2 3h2m3.015 4.409l1.768 1.768m0 0l1.768 1.767m-1.768-1.767l-1.768 1.767m1.768-1.767l1.768-1.768"></svg:path>`,
})
export class FlowbiteSchoolXmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

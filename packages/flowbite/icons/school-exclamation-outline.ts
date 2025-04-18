import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolExclamationOutlineIcon],svg[flowbite-school-exclamation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.071 20v-9l-4 1.125V20zm0 0h8m-8 0V6.667m8 13.333v-9l1.5.422M16.071 20h1m-1 0V6.667m2 1.333l-6-4l-6 4m5 1h2m-2 3h2m7 8h.01m-.01-3v-4"></svg:path>`,
})
export class FlowbiteSchoolExclamationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

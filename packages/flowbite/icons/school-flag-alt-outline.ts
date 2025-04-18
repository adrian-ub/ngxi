import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolFlagAltOutlineIcon],svg[flowbite-school-flag-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.429 11l5-6l5 6m-10 0h-3v8h16v-8h-3m-10 0h-4l3-4h4.337zm10 0V7.5m-3 5.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m3-8v3h4V5z"></svg:path>`,
})
export class FlowbiteSchoolFlagAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolAltOutlineIcon],svg[flowbite-school-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m7.143 11l5-6l5 6m-10 0h-3v8h16v-8h-3m-10 0h-4l3-4h4.337zm10 0h4l-3-4h-4.338zm-3 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class FlowbiteSchoolAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

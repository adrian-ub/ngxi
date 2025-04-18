import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolExclamationAltOutlineIcon],svg[flowbite-school-exclamation-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 19h-13v-8h3m0 0l5-6l5 6m-10 0h-4l3-4h4.337zm13 8h.01m-.01-3v-3m-6.337-6H18.5l2 2.5m-6 3.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FlowbiteSchoolExclamationAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

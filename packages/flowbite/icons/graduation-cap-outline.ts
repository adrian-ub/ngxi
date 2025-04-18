import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteGraduationCapOutlineIcon],svg[flowbite-graduation-cap-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.786 9.5l9 4.5l9-4.5l-9-4.5zm0 0V17m3-6v6.222c0 .348 2 1.778 6 1.778s6-1.374 6-1.778V11"></svg:path>`,
})
export class FlowbiteGraduationCapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

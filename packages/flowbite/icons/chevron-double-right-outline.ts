import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChevronDoubleRightOutlineIcon],svg[flowbite-chevron-double-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16l4-4l-4-4m6 8l4-4l-4-4"></svg:path>`,
})
export class FlowbiteChevronDoubleRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

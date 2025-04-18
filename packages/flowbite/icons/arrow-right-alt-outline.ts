import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteArrowRightAltOutlineIcon],svg[flowbite-arrow-right-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.153 19L21 12l-4.847-7H3l4.848 7L3 19z"></svg:path>`,
})
export class FlowbiteArrowRightAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

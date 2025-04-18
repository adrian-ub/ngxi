import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteIcecreamAltOutlineIcon],svg[flowbite-icecream-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6a3 3 0 1 1 6 0M9 6c0 1.043.533 1.963 1.341 2.5M9 6a3 3 0 0 0 0 6m6.39 0a3 3 0 1 0-1.66-5.5M8 12h8l-4 9z"></svg:path>`,
})
export class FlowbiteIcecreamAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

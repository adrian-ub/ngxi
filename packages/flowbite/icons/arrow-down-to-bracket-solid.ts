import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteArrowDownToBracketSolidIcon],svg[flowbite-arrow-down-to-bracket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2"></svg:path><svg:path d="M12 15.5V4"></svg:path><svg:path stroke-linejoin="round" d="m8 12l4 4l4-4"></svg:path></svg:g>`,
})
export class FlowbiteArrowDownToBracketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

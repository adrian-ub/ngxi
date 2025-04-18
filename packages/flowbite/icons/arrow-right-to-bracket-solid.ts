import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteArrowRightToBracketSolidIcon],svg[flowbite-arrow-right-to-bracket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M19.5 12H8"></svg:path><svg:path stroke-linejoin="round" d="M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2m7-4l4-4l-4-4"></svg:path></svg:g>`,
})
export class FlowbiteArrowRightToBracketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

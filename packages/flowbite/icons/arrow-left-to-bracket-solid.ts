import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteArrowLeftToBracketSolidIcon],svg[flowbite-arrow-left-to-bracket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M15.5 12H4"></svg:path><svg:path stroke-linejoin="round" d="M15 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"></svg:path><svg:path stroke-linejoin="round" d="m12 16l4-4l-4-4"></svg:path></svg:g>`,
})
export class FlowbiteArrowLeftToBracketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

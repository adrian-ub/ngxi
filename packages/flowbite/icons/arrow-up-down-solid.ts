import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteArrowUpDownSolidIcon],svg[flowbite-arrow-up-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M8 20V7m8-3v13"></svg:path><svg:path stroke-linejoin="round" d="m4 16l4 4l4-4m8-8l-4-4l-4 4"></svg:path></svg:g>`,
})
export class FlowbiteArrowUpDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

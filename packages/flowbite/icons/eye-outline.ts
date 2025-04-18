import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteEyeOutlineIcon],svg[flowbite-eye-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6s4.03-6 9-6s9 4.8 9 6Z"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class FlowbiteEyeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

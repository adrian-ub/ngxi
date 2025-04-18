import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteForwardStepOutlineIcon],svg[flowbite-forward-step-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 6v12M8 6v12l8-6z"></svg:path>`,
})
export class FlowbiteForwardStepOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

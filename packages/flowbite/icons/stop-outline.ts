import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteStopOutlineIcon],svg[flowbite-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12" height="12" x="6" y="6" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" rx="1"></svg:rect>`,
})
export class FlowbiteStopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

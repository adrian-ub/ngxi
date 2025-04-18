import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMartiniGlassCitrusOutlineIcon],svg[flowbite-martini-glass-citrus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 14l6-6H4zm0 0v6m-3 0h6m.035-12a3.5 3.5 0 1 1 1.015 2"></svg:path>`,
})
export class FlowbiteMartiniGlassCitrusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

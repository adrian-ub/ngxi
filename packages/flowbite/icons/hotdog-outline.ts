import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteHotdogOutlineIcon],svg[flowbite-hotdog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 8l1-1m-1 5.5l1-1m-1 5.5l1-1M9 20V4h-.5A3.5 3.5 0 0 0 5 7.5v9A3.5 3.5 0 0 0 8.5 20zm6 0V4h.5A3.5 3.5 0 0 1 19 7.5v9a3.5 3.5 0 0 1-3.5 3.5zm0-2V6a3 3 0 1 0-6 0v12a3 3 0 1 0 6 0"></svg:path>`,
})
export class FlowbiteHotdogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

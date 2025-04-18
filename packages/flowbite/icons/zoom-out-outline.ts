import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteZoomOutOutlineIcon],svg[flowbite-zoom-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-3.5-3.5M7 10h6m4 0a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"></svg:path>`,
})
export class FlowbiteZoomOutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

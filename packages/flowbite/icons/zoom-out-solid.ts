import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteZoomOutSolidIcon],svg[flowbite-zoom-out-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m4 0a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteZoomOutSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

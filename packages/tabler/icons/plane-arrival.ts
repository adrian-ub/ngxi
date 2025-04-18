import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlaneArrivalIcon],svg[tabler-plane-arrival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.157 11.81l4.83 1.295a2 2 0 1 1-1.036 3.863L4.462 13.086L3.117 6.514l2.898.776l1.414 2.45l2.898.776l-.12-7.279l2.898.777zM3 21h18"></svg:path>`,
})
export class TablerPlaneArrivalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

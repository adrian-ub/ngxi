import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTrafficConeIcon],svg[streamline-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.5h13M5.3 1.24L2 13.5h10L8.7 1.24A1 1 0 0 0 7.733.5H6.266a1 1 0 0 0-.965.74ZM4.423 4.5h5.154m-6.5 5h7.846"></svg:path>`,
})
export class StreamlineTrafficConeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

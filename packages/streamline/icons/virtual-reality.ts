import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVirtualRealityIcon],svg[streamline-virtual-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.5H.5v5a1 1 0 0 0 1 1h3a1 1 0 0 0 .78-.38l1.31-1.63a.5.5 0 0 1 .78 0l1.33 1.63a1 1 0 0 0 .78.38h3a1 1 0 0 0 1-1zm0 0L10.79 2a1 1 0 0 0-.86-.49H4.07a1 1 0 0 0-.86.49L.5 6.5"></svg:path>`,
})
export class StreamlineVirtualRealityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

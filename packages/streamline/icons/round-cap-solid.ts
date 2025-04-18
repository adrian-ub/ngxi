import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRoundCapSolidIcon],svg[streamline-round-cap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a5 5 0 0 0 5 5h9V7.75H6.855a2 2 0 1 1 0-1.5H14V2H5a5 5 0 0 0-5 5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRoundCapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSnowFlakeIcon],svg[streamline-snow-flake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 .5l2 2l2-2M.5 9l2-2l-2-2M9 13.5l-2-2l-2 2M13.5 5l-2 2l2 2m-10-5.5L5 5m0 4l-1.5 1.5m7-7L9 5m0 4l1.5 1.5M7 2.5v9M2.5 7h9"></svg:path>`,
})
export class StreamlineSnowFlakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

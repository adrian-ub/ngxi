import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowMoveIcon],svg[streamline-arrow-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 2.5l2-2l2 2m-4 9l2 2l2-2M7 .5v13M11.5 5l2 2l-2 2m-9-4l-2 2l2 2m11-2H.5"></svg:path>`,
})
export class StreamlineArrowMoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

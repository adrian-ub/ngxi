import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSdCardFillIcon],svg[ri-sd-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.293 6.707L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5v4h2V5zm-3 0v4h2V5zM9 5v4h2V5z"></svg:path>`,
})
export class RiSdCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

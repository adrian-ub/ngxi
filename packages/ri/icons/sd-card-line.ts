import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSdCardLineIcon],svg[ri-sd-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.828V20h12V4H9.828zm-1.707-1.12L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5h2v4h-2zm-3 0h2v4h-2zM9 6h2v3H9z"></svg:path>`,
})
export class RiSdCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

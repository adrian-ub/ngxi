import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceGardenIcon],svg[guidance-garden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 6.5V7m0-.5a6 6 0 0 1 6-6h.5V7a6.5 6.5 0 0 1-6.5 6.5m0-7a6 6 0 0 0-6-6h-.5V7a6.5 6.5 0 0 0 6.5 6.5m0 0V23m0-9.5v9m0 1H7.5a6 6 0 0 1-6-6H6a6 6 0 0 1 6 6Zm0 0h4.5a6 6 0 0 0 6-6H18a6 6 0 0 0-6 6Z"></svg:path>`,
})
export class GuidanceGardenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDeltaIcon],svg[tdesign-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2.091V22.79L3.172 13.05zM6.828 12.951L17 19.21V5.907z"></svg:path>`,
})
export class TdesignDeltaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

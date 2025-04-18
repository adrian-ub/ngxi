import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTextSpacingIcon],svg[ri-text-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h10v-2.5l3.5 3.5l-3.5 3.5V19H7v2.5L3.5 18L7 14.5zm6-11v9h-2V6H5V4h14v2z"></svg:path>`,
})
export class RiTextSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

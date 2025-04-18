import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFrame1FilledIcon],svg[tdesign-frame-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5.33v20H2zm7.335 0h5.33v20h-5.33zM22 2h-5.33v20H22z"></svg:path>`,
})
export class TdesignFrame1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

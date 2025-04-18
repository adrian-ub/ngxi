import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHeartIcon],svg[nrk-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 2H5L2 6v7l9 8h2l9-8V6l-3-4h-4l-3 3zm6.828 2L12 7.828L8.172 4H6L4 6.667v5.435L11.76 19h.48L20 12.102V6.667L18 4z" clip-rule="evenodd"></svg:path>`,
})
export class NrkHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

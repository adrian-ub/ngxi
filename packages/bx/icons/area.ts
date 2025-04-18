import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxAreaIcon],svg[bx-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2m16.002 14H5V5h14z"></svg:path><svg:path fill="currentColor" d="M15 12h2V7h-5v2h3zm-3 3H9v-3H7v5h5z"></svg:path>`,
})
export class BxAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePagesIcon],svg[ic-twotone-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 7l4 1V5H5v6h3zm1 6H5v6h6v-3l-4 1zm9 4l-4-1v3h6v-6h-3zm-4-9l4-1l-1 4h3V5h-6z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 5h6v3L7 7l1 4H5zm6 14H5v-6h3l-1 4l4-1zm-1.63-4.37l.91-2.63l-.91-2.63l2.63.91l2.63-.91l-.91 2.63l.91 2.63l-2.63-.91zM19 19h-6v-3l4 1l-1-4h3zm0-8h-3l1-4l-4 1V5h6z"></svg:path>`,
})
export class IcTwotonePagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

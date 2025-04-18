import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlinePagesIcon],svg[ic-outline-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 2h6v6h-3l1-4l-4 1zM5 5h6v3L7 7l1 4H5zm6 14H5v-6h3l-1 4l4-1zm8 0h-6v-3l4 1l-1-4h3zm-4.37-4.37L12 13.72l-2.63.91l.91-2.63l-.91-2.63l2.63.91l2.63-.91l-.91 2.63z"></svg:path>`,
})
export class IcOutlinePagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

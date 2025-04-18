import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineFlareIcon],svg[ic-outline-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11H1v2h6zm2.17-3.24L7.05 5.64L5.64 7.05l2.12 2.12zM13 1h-2v6h2zm5.36 6.05l-1.41-1.41l-2.12 2.12l1.41 1.41zM17 11v2h6v-2zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m2.83 7.24l2.12 2.12l1.41-1.41l-2.12-2.12zm-9.19.71l1.41 1.41l2.12-2.12l-1.41-1.41zM11 23h2v-6h-2z"></svg:path>`,
})
export class IcOutlineFlareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

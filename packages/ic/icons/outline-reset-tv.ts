import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineResetTvIcon],svg[ic-outline-reset-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2v-5H22c0-1.1-.9-2-2-2h-7.17l1.83-1.83l-1.41-1.41C9.69 10.31 10.88 9.12 9 11l4.24 4.24l1.41-1.41L12.83 12H20v5H4V5h16v3z"></svg:path>`,
})
export class IcOutlineResetTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

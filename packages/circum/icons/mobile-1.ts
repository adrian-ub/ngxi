import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMobile1Icon],svg[circum-mobile-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18.933h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1"></svg:path><svg:path fill="currentColor" d="M16.727 21.937H7.273a2.384 2.384 0 0 1-2.239-2.5V4.563a2.384 2.384 0 0 1 2.239-2.5h9.454a2.384 2.384 0 0 1 2.239 2.5v14.874a2.384 2.384 0 0 1-2.239 2.5M7.273 3.063a1.39 1.39 0 0 0-1.239 1.5v14.874a1.39 1.39 0 0 0 1.239 1.5h9.454a1.39 1.39 0 0 0 1.239-1.5V4.563a1.39 1.39 0 0 0-1.239-1.5Z"></svg:path>`,
})
export class CircumMobile1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

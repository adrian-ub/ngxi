import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirectionRight02Icon],svg[hugeicons-direction-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.852 5.68c-.678-.827-1.018-1.24-1.48-1.46C14.907 4 14.377 4 13.318 4H8c-.943 0-1.414 0-1.707.293S6 5.057 6 6v3c0 .943 0 1.414.293 1.707S7.057 11 8 11h5.319c1.059 0 1.589 0 2.052-.22s.803-.633 1.48-1.46l.27-.326C17.706 8.28 18 7.922 18 7.5s-.293-.78-.88-1.494zM10 11v10m0-18v1M6 21h8" color="currentColor"></svg:path>`,
})
export class HugeiconsDirectionRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

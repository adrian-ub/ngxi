import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNodeMoveUpIcon],svg[hugeicons-node-move-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.495 8v4.5m0 0V14c0 2.828 0 4.243.878 5.121c.825.826 2.122.876 4.618.879m-5.496-7.5h5.496m-.001 0c0-.943 0-1.414.293-1.707s.764-.293 1.706-.293s1.413 0 1.706.293s.293.764.293 1.707s0 1.414-.293 1.707s-.764.293-1.706.293s-1.413 0-1.706-.293s-.292-.764-.292-1.707"></svg:path><svg:path d="M10.99 20c0-.943 0-1.414.293-1.707S12.047 18 12.99 18s1.413 0 1.706.293s.293.764.293 1.707s0 1.414-.293 1.707s-.764.293-1.706.293s-1.413 0-1.706-.293s-.292-.764-.292-1.707M3.996 2h2.998c1.814 0 1.998 1.11 1.998 3s-.184 3-1.998 3H3.996C2.182 8 1.998 6.89 1.998 5s.184-3 1.998-3m13.996 9.089l1.454-1.773c.24-.266.409-.317.557-.312m0 0c.146.004.285.063.494.312l1.505 1.784m-1.999-2.096l-.023 8.258c.071.875-.049 2.566-1.997 2.746"></svg:path></svg:g>`,
})
export class HugeiconsNodeMoveUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

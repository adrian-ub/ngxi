import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBuildingTreeIcon],svg[mage-building-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.206 3.41h5.263a2.713 2.713 0 0 1 2.712 2.713V20.59H6.493V6.123A2.713 2.713 0 0 1 9.206 3.41m-6.04 17.18H21.25"></svg:path><svg:path d="M11.693 14.26h.325a1.356 1.356 0 0 1 1.356 1.357v4.973h-3.038v-4.973a1.356 1.356 0 0 1 1.357-1.357M9.884 7.027h3.906m-3.906 3.617h3.906m3.391-1.357h.687A2.713 2.713 0 0 1 20.581 12v8.59m-16.475 0v-6.782m1.357-2.712a1.356 1.356 0 1 0-2.713 0v1.356a1.356 1.356 0 1 0 2.713 0z"></svg:path></svg:g>`,
})
export class MageBuildingTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

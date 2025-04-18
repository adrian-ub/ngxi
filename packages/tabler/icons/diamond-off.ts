import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDiamondOffIcon],svg[tabler-diamond-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 5h9l3 5l-3.308 3.697m-1.883 2.104L12.5 19.5a.7.7 0 0 1-1 0L3 10l2.62-4.368"></svg:path><svg:path d="M10 12L8 9.8l.6-1M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerDiamondOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSquareChevDownIcon],svg[circum-square-chev-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.65 10.85a.495.495 0 0 1 .7-.7L12 12.79l2.65-2.64a.495.495 0 0 1 .7.7l-3 3a.49.49 0 0 1-.7 0Z"></svg:path><svg:path fill="currentColor" d="M3.063 18.437V5.563a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.874a2.5 2.5 0 0 1-2.5 2.5H5.563a2.5 2.5 0 0 1-2.5-2.5M19.937 5.563a1.5 1.5 0 0 0-1.5-1.5H5.563a1.5 1.5 0 0 0-1.5 1.5v12.874a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5Z"></svg:path>`,
})
export class CircumSquareChevDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

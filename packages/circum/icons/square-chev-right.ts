import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSquareChevRightIcon],svg[circum-square-chev-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.85 15.35a.495.495 0 0 1-.7-.7L12.79 12l-2.64-2.65a.495.495 0 0 1 .7-.7l3 3a.49.49 0 0 1 0 .7Z"></svg:path><svg:path fill="currentColor" d="M18.437 20.937H5.563a2.5 2.5 0 0 1-2.5-2.5V5.563a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.874a2.5 2.5 0 0 1-2.5 2.5M5.563 4.063a1.5 1.5 0 0 0-1.5 1.5v12.874a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.563a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class CircumSquareChevRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

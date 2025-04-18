import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFactCheckIcon],svg[tdesign-fact-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3v18H1V3zm-2 2H3v14h18zm-1.086 5.5L15 15.414L12.086 12.5l1.414-1.414l1.5 1.5l3.5-3.5zM11 17H5v-2h6zm0-8H5V7h6zm0 4H5v-2h6z"></svg:path>`,
})
export class TdesignFactCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

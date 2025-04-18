import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFactCheckFilledIcon],svg[tdesign-fact-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-3.086 7.5L15 15.414L12.086 12.5l1.414-1.414l1.5 1.5l3.5-3.5zM11 17H5v-2h6zm0-8H5V7h6zm0 4H5v-2h6z"></svg:path>`,
})
export class TdesignFactCheckFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

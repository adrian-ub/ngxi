import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceUpArrowIcon],svg[guidance-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 8c.742 0 1.85-.733 2.78-1.475c1.2-.954 2.247-2.094 3.046-3.401C11.425 2.144 12 .956 12 0m0 0c0 .956.575 2.145 1.174 3.124c.8 1.307 1.847 2.447 3.045 3.401C17.15 7.267 18.26 8 19 8m-7-8v24"></svg:path>`,
})
export class GuidanceUpArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

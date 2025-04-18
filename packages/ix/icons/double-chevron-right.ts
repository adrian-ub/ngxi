import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDoubleChevronRightIcon],svg[ix-double-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M281.813 134.187L403.413 256l-121.6 121.814l-30.293-30.294L343.253 256l-91.733-91.52zm-128 0L275.413 256l-121.6 121.814l-30.293-30.294L215.253 256l-91.733-91.52z"></svg:path>`,
})
export class IxDoubleChevronRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

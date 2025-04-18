import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinStopwatchIcon],svg[vaadin-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.14V4.5h-1v3.64a1.001 1.001 0 0 0 .5 1.866a1 1 0 0 0 .505-1.863z"></svg:path><svg:path fill="currentColor" d="M8 2a7 7 0 1 0 0 14A7 7 0 0 0 8 2m0 12.5a5.5 5.5 0 1 1 0-11A5.5 5.5 0 0 1 13.5 9a5.51 5.51 0 0 1-5.499 5.5zM6 0h4v1.5H6z"></svg:path><svg:path fill="currentColor" d="m.005 4.438l2.713-2.939L3.82 2.516L1.107 5.455zm12.181-1.919l1.102-1.017l2.713 2.939l-1.102 1.017z"></svg:path>`,
})
export class VaadinStopwatchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

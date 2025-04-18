import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconIntegralDistributeOutlineIcon],svg[lsicon-integral-distribute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 13.5c-2.485 0-4.5-.895-4.5-2V4m0 0S4 2.5 8 2.5S12.5 4 12.5 4m-9 0c0 1.105 2.015 2 4.5 2s4.5-.895 4.5-2m0 0v5m0-2.5c0 1.105-2.015 2-4.5 2s-4.5-.895-4.5-2M8 11c-2.485 0-4.5-.895-4.5-2M9 10l3.5 3.5m0 0V10m0 3.5H9"></svg:path>`,
})
export class LsiconIntegralDistributeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

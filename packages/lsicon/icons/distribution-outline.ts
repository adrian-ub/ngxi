import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDistributionOutlineIcon],svg[lsicon-distribution-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Zm0 0h5.5m0 0a1.5 1.5 0 0 1 3 0m-3 0a1.5 1.5 0 0 0 3 0m0 0h1V6.5m0 0h-5v-2m5 2l-1.5-2H9.5m0 0v-2H3m-1 3h4.5M1 8.5h4.5"></svg:path>`,
})
export class LsiconDistributionOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

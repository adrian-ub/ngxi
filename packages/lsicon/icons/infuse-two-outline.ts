import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconInfuseTwoOutlineIcon],svg[lsicon-infuse-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13 3L6.5 9.5m0 0V5m0 4.5H11m2.55.029v3.996H2.501V9.53"></svg:path>`,
})
export class LsiconInfuseTwoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

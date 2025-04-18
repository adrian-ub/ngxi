import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconInfuseOneOutlineIcon],svg[lsicon-infuse-one-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M9 1.5H3.5v13h6M9 1.5L12.5 5M9 1.5V5h3.5m0 0v2.5m2 4H9m0 0l2-2m-2 2l2 2"></svg:path>`,
})
export class LsiconInfuseOneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

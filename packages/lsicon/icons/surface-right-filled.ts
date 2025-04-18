import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceRightFilledIcon],svg[lsicon-surface-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l7 3.23v7.64l-7 3.23l-7-3.23V4.18zM2 5.28v5.9l5.5 2.538v-5.9zm11.307-.78L8 2.05L2.693 4.5L8 6.95z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

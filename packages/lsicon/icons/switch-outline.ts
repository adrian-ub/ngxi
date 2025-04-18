import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSwitchOutlineIcon],svg[lsicon-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14 9.5H3l4 3m-5-6h11L9 3"></svg:path>`,
})
export class LsiconSwitchOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

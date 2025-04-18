import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCalcplusIcon],svg[whh-calcplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-544q0-13-9.5-22.5t-22.5-9.5h-160V288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v160h-160q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h160v160q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V576h160q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhCalcplusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolResizeFullCircleIcon],svg[websymbol-resize-full-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 501q0 136-67 251T751 934t-251 67t-251-67T67 752T0 501t67-251T249 68T500 1t251 67t182 182t67 251m-356-82l116 102V241H480l102 116l-13 13l-213 213l-116-102v280h280L418 645z"></svg:path>`,
})
export class WebsymbolResizeFullCircleIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}

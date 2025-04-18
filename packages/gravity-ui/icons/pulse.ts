import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiPulseIcon],svg[gravity-ui-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiPulse0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M9.235 1a.75.75 0 0 1 .74.56l2.034 7.726l1.09-1.908A.75.75 0 0 1 13.75 7h1.5a.75.75 0 0 1 0 1.5h-1.065l-1.784 3.122a.75.75 0 0 1-1.376-.181l-1.71-6.496l-2.083 9.466a.75.75 0 0 1-1.446.07L3.544 7.55l-.65 1.085A.75.75 0 0 1 2.25 9H.75a.75.75 0 1 1 0-1.5h1.075l1.282-2.136a.75.75 0 0 1 1.357.155l1.898 5.868l2.156-9.798A.75.75 0 0 1 9.235 1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiPulse0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiPulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

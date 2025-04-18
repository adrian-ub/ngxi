import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiPlugWireIcon],svg[gravity-ui-plug-wire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiPlugWire0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.89 4.111a5.5 5.5 0 0 0-7.78 0c-2.599 2.6-2.12 5.657-1.06 6.718a.75.75 0 0 0 1.06 0l.925-.925a3.09 3.09 0 0 1-.173-2.843l.547-1.23a1 1 0 0 1 1.62-.302l.19.19l.75-.75A.75.75 0 1 1 9.03 6.03l-.75.75l.94.94l.75-.75a.75.75 0 1 1 1.06 1.06l-.75.75l.19.19a1 1 0 0 1-.3 1.621l-1.231.547a3.09 3.09 0 0 1-2.843-.173l-.924.924a2.25 2.25 0 0 1-3.182 0C.222 10.122-.007 6.107 3.05 3.05a7 7 0 1 1 2.983 11.67a.75.75 0 1 1 .42-1.44a5.5 5.5 0 0 0 5.436-9.168m-5.658 3.56l.252-.566l2.411 2.411l-.566.252A1.589 1.589 0 0 1 6.232 7.67" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiPlugWire0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiPlugWireIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

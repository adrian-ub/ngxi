import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiPencilOutlinedIcon],svg[weui-pencil-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3v1.2H4.2v15.6h15.6V10H21v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5.86-.254a.5.5 0 0 1 .706 0l.706.705a.5.5 0 0 1 0 .706l-9.51 9.51l-2.317 1.295a.3.3 0 0 1-.406-.41l1.312-2.296z"></svg:path>`,
})
export class WeuiPencilOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

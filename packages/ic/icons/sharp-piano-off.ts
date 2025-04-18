import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPianoOffIcon],svg[ic-sharp-piano-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 21.19L2.81 2.81L1.39 4.22L3 5.83V21h15.17l1.61 1.61zM8.25 19H5V7.83l2 2v4.67h1.25zm1.5 0v-4.5H11v-.67l3.25 3.25V19zM5.83 3H21v15.17l-2-2V5h-2v9.17l-4-4V5h-2v3.17z"></svg:path>`,
})
export class IcSharpPianoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

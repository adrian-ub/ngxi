import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpComputerIcon],svg[ic-sharp-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 18l2-2V4H2v12l2 2H0v2h24v-2zM4 6h16v10H4z"></svg:path>`,
})
export class IcSharpComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

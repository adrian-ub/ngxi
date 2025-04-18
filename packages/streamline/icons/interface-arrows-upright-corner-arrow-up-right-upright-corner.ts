import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUprightCornerArrowUpRightUprightCornerIcon],svg[streamline-interface-arrows-upright-corner-arrow-up-right-upright-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5h12a1 1 0 0 1 1 1v12"></svg:path>`,
})
export class StreamlineInterfaceArrowsUprightCornerArrowUpRightUprightCornerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

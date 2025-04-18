import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonDownDoubleArrowArrowsDoubleDownIcon],svg[streamline-interface-arrows-button-down-double-arrow-arrows-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 6.46l6.15 6.14a.48.48 0 0 0 .7 0l6.15-6.14"></svg:path><svg:path d="M.5 1.25L6.65 7.4a.5.5 0 0 0 .7 0l6.15-6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonDownDoubleArrowArrowsDoubleDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

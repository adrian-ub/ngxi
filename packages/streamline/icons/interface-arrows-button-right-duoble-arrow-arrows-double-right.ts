import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonRightDuobleArrowArrowsDoubleRightIcon],svg[streamline-interface-arrows-button-right-duoble-arrow-arrows-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6.46.5l6.14 6.15a.48.48 0 0 1 0 .7L6.46 13.5"></svg:path><svg:path d="M1.25.5L7.4 6.65a.5.5 0 0 1 0 .7L1.25 13.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonRightDuobleArrowArrowsDoubleRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

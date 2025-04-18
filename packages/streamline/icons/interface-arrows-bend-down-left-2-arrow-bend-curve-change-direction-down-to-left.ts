import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownLeft2ArrowBendCurveChangeDirectionDownToLeftIcon],svg[streamline-interface-arrows-bend-down-left-2-arrow-bend-curve-change-direction-down-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 11.5l-3-3l3-3"></svg:path><svg:path d="M13.5 2.5v2a4 4 0 0 1-4 4h-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownLeft2ArrowBendCurveChangeDirectionDownToLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

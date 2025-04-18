import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownRight2ArrowBendCurveChangeDirectionDownToRightIcon],svg[streamline-interface-arrows-bend-down-right-2-arrow-bend-curve-change-direction-down-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 11.5l3-3l-3-3"></svg:path><svg:path d="M.5 2.5v2a4 4 0 0 0 4 4h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownRight2ArrowBendCurveChangeDirectionDownToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

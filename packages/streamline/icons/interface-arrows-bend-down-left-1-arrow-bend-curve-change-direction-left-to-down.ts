import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownLeft1ArrowBendCurveChangeDirectionLeftToDownIcon],svg[streamline-interface-arrows-bend-down-left-1-arrow-bend-curve-change-direction-left-to-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.75 11l2.5 2.5l2.5-2.5"></svg:path><svg:path d="M11.25.5h-5a1 1 0 0 0-1 1v12"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownLeft1ArrowBendCurveChangeDirectionLeftToDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

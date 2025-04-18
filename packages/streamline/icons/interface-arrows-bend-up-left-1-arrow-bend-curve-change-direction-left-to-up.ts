import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpLeft1ArrowBendCurveChangeDirectionLeftToUpIcon],svg[streamline-interface-arrows-bend-up-left-1-arrow-bend-curve-change-direction-left-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.75 3L5.25.5L7.75 3"></svg:path><svg:path d="M11.25 13.5h-5a1 1 0 0 1-1-1V.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpLeft1ArrowBendCurveChangeDirectionLeftToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

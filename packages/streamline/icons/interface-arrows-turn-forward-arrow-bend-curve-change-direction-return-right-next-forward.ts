import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnForwardArrowBendCurveChangeDirectionReturnRightNextForwardIcon],svg[streamline-interface-arrows-turn-forward-arrow-bend-curve-change-direction-return-right-next-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 1.5l3 3l-3 3"></svg:path><svg:path d="M13.5 4.5h-9a4 4 0 0 0 0 8h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnForwardArrowBendCurveChangeDirectionReturnRightNextForwardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

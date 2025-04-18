import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnBackwardArrowBendCurveChangeDirectionReturnLeftBackBackwardIcon],svg[streamline-interface-arrows-turn-backward-arrow-bend-curve-change-direction-return-left-back-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 1.5l-3 3l3 3"></svg:path><svg:path d="M.5 4.5h9a4 4 0 0 1 0 8h-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnBackwardArrowBendCurveChangeDirectionReturnLeftBackBackwardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

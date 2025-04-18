import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnDownArrowBendCurveChangeDirectionReturnDownIcon],svg[streamline-interface-arrows-turn-down-arrow-bend-curve-change-direction-return-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.5 10.5l3 3l3-3"></svg:path><svg:path d="M4.5 13.5v-9a4 4 0 0 1 8 0v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnDownArrowBendCurveChangeDirectionReturnDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

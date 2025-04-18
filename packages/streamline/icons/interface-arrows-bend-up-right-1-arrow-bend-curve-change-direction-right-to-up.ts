import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpRight1ArrowBendCurveChangeDirectionRightToUpIcon],svg[streamline-interface-arrows-bend-up-right-1-arrow-bend-curve-change-direction-right-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 3.5l-3-3l-3 3"></svg:path><svg:path d="M2.5 13.5h2a4 4 0 0 0 4-4v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpRight1ArrowBendCurveChangeDirectionRightToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpRight2ArrowBendCurveChangeDirectionUpToRightIcon],svg[streamline-interface-arrows-bend-up-right-2-arrow-bend-curve-change-direction-up-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 2.5l3 3l-3 3"></svg:path><svg:path d="M.5 11.5v-2a4 4 0 0 1 4-4h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpRight2ArrowBendCurveChangeDirectionUpToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

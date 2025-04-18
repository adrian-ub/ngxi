import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendRight1ArrowBendCurveChangeDirectionUpToRightIcon],svg[streamline-interface-arrows-bend-right-1-arrow-bend-curve-change-direction-up-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 2.75l2.5 2.5l-2.5 2.5"></svg:path><svg:path d="M.5 11.25v-5a1 1 0 0 1 1-1h12"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendRight1ArrowBendCurveChangeDirectionUpToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

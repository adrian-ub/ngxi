import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpLeft2ArrowBendCurveChangeDirectionLeftToUpIcon],svg[streamline-interface-arrows-bend-up-left-2-arrow-bend-curve-change-direction-left-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 3.5l3-3l3 3"></svg:path><svg:path d="M11.5 13.5h-2a4 4 0 0 1-4-4v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpLeft2ArrowBendCurveChangeDirectionLeftToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

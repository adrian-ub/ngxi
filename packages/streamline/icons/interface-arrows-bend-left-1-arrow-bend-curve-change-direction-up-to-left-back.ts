import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendLeft1ArrowBendCurveChangeDirectionUpToLeftBackIcon],svg[streamline-interface-arrows-bend-left-1-arrow-bend-curve-change-direction-up-to-left-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 2.75L.5 5.25L3 7.75"></svg:path><svg:path d="M13.5 11.25v-5a1 1 0 0 0-1-1H.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendLeft1ArrowBendCurveChangeDirectionUpToLeftBackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

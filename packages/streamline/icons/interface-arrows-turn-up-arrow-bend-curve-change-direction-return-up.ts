import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnUpArrowBendCurveChangeDirectionReturnUpIcon],svg[streamline-interface-arrows-turn-up-arrow-bend-curve-change-direction-return-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12.5 3.5l-3-3l-3 3"></svg:path><svg:path d="M9.5.5v9a4 4 0 0 1-8 0v-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnUpArrowBendCurveChangeDirectionReturnUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

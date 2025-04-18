import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoRadioIcon],svg[entypo-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8H5.021l8.974-5.265L13 1L1.736 7.571A1.48 1.48 0 0 0 1 8.852V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2m-1.5 9a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15.5 17m1.5-5H3v-2h14z"></svg:path>`,
})
export class EntypoRadioIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

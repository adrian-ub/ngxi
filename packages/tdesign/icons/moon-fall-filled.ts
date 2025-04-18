import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMoonFallFilledIcon],svg[tdesign-moon-fall-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.916 1.692l-.45 1.674c-.3 1.116-.27 2.337.07 3.604a7 7 0 0 0 9.84 4.476l1.541-.752l-.104 1.711c-.062 1.034-.374 2.06-.919 3.149l-.276.553h-5.92L12 17.907l-2.697-1.8H2.828l-.304-.746l-.113-.288a8 8 0 0 1-.24-.685C.74 9.053 3.906 3.57 9.24 2.141zM1 18.107h8.303L12 19.905l2.697-1.798H23v2h-7.697L12 22.308l-3.303-2.201H1z"></svg:path>`,
})
export class TdesignMoonFallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

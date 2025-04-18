import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1StopButtonIcon],svg[noto-v1-stop-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M0 0h128v128H0z"></svg:path><svg:path fill="#40c0e7" d="M32 32h64v64H32z"></svg:path>`,
})
export class NotoV1StopButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

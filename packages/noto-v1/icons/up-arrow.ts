import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1UpArrowIcon],svg[noto-v1-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="m64 22.95l31.13 42.47H75.71v39.63H52.48V65.42H32.86z"></svg:path>`,
})
export class NotoV1UpArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

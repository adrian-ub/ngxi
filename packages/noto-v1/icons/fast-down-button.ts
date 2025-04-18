import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1FastDownButtonIcon],svg[noto-v1-fast-down-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="m29.01 6.24l31.71 54.92H29.01L64 121.76l34.99-60.6H67.28L98.99 6.24z"></svg:path>`,
})
export class NotoV1FastDownButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

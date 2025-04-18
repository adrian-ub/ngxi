import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1BlueCircleIcon],svg[noto-v1-blue-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="M126.71 64c0 34.63-28.07 62.71-62.71 62.71c-34.63 0-62.71-28.08-62.71-62.71C1.29 29.36 29.37 1.29 64 1.29c34.64 0 62.71 28.07 62.71 62.71"></svg:path>`,
})
export class NotoV1BlueCircleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

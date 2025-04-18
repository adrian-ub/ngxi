import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1EjectButtonIcon],svg[noto-v1-eject-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M28.08 89.99h72v18h-72zm-.16-12.11h72L63.92 20z"></svg:path>`,
})
export class NotoV1EjectButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

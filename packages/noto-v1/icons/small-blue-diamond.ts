import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1SmallBlueDiamondIcon],svg[noto-v1-small-blue-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="M64 92.17c-.68 0-1.37-.26-1.89-.78L36.6 65.88a2.68 2.68 0 0 1 0-3.78l25.51-25.52c1-1 2.77-1 3.77 0L91.4 62.1c.5.5.78 1.18.78 1.89s-.28 1.39-.78 1.89L65.88 91.39c-.52.51-1.2.78-1.88.78"></svg:path>`,
})
export class NotoV1SmallBlueDiamondIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

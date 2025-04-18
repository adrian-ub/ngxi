import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1SmallOrangeDiamondIcon],svg[noto-v1-small-orange-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff9800" d="M64 92.16c-.68 0-1.37-.26-1.89-.78L36.6 65.87a2.67 2.67 0 0 1 0-3.77l25.51-25.52c1-.99 2.77-1 3.77 0L91.4 62.1c.5.5.78 1.17.78 1.88s-.28 1.38-.78 1.88L65.88 91.38c-.52.52-1.2.78-1.88.78"></svg:path>`,
})
export class NotoV1SmallOrangeDiamondIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DiamondSuitIcon],svg[noto-v1-diamond-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#db4437" d="M113.99 62.45L65.95.97c-.94-1.2-2.96-1.2-3.9 0L14.01 62.44c-.7.9-.7 2.16 0 3.05l48.04 61.48a2.478 2.478 0 0 0 3.9 0l48.03-61.48c.7-.89.7-2.15.01-3.04"></svg:path>`,
})
export class NotoV1DiamondSuitIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

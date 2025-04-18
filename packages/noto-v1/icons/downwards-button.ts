import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DownwardsButtonIcon],svg[noto-v1-downwards-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#db4437" d="M64 88.77c-.91 0-1.75-.46-2.25-1.23l-28.4-44.2c-.53-.83-.57-1.87-.1-2.72s1.37-1.39 2.34-1.39H92.4c.97 0 1.87.53 2.34 1.39c.47.85.43 1.9-.1 2.72l-28.4 44.2c-.49.77-1.33 1.23-2.24 1.23"></svg:path>`,
})
export class NotoV1DownwardsButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

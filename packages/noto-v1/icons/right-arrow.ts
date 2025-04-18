import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1RightArrowIcon],svg[noto-v1-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M108.58 64L62.47 97.81V76.72H19.42V51.49h43.04v-21.3z"></svg:path>`,
})
export class NotoV1RightArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1RightArrowCurvingDownIcon],svg[noto-v1-right-arrow-curving-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M46.68 21.56L36.22 40.88c3.2 0 7.74 1.1 10.46 2.88c4.89 3.2 7.2 8.67 7.2 14V67.8H25.91l38.11 38.64L102.1 67.8H74.15v-9.96c0-28.02-19.63-34.74-27.47-36.28"></svg:path>`,
})
export class NotoV1RightArrowCurvingDownIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

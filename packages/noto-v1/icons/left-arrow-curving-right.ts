import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1LeftArrowCurvingRightIcon],svg[noto-v1-left-arrow-curving-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#40c0e7" d="M87.63 81.56V66.3l33.03 24.22l-33.03 24.21V99.56h-19c-37.33 0-61.29-10.94-61.29-43.15S31.3 13.27 68.63 13.27h42.75v17.94H68.63c-31.81 0-43.36 6.83-43.36 25.2s11.55 25.21 43.36 25.21h18.99v-.06z"></svg:path>`,
})
export class NotoV1LeftArrowCurvingRightIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

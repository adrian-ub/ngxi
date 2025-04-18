import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1UpwardsButtonIcon],svg[noto-v1-upwards-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#db4437" d="M92.41 88.77H35.59c-.97 0-1.88-.53-2.34-1.39c-.47-.86-.43-1.9.1-2.72l28.4-44.21c.49-.76 1.34-1.22 2.25-1.22s1.75.47 2.25 1.22l28.4 44.21c.53.82.57 1.86.1 2.72s-1.37 1.39-2.34 1.39"></svg:path>`,
})
export class NotoV1UpwardsButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

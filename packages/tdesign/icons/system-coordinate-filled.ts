import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemCoordinateFilledIcon],svg[tdesign-system-coordinate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.272 1v2.65l6.613 3.89v7.745l2.465 1.295l-.93 1.77l-2.507-1.317l-5.641 3.317V23h-2v-2.65l-5.69-3.346l-3.12 1.304l-.77-1.845l2.967-1.24V7.539l6.613-3.889V1zm-2 17.03v-5.458L6.66 9.859v5.458z"></svg:path>`,
})
export class TdesignSystemCoordinateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1CheckBoxWithCheckIcon],svg[noto-v1-check-box-with-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M7.86 7.85h112.28v112.29H7.86z"></svg:path><svg:path fill="#2f2f2f" d="M124.54.47H3.47C1.82.47.48 1.81.48 3.46v121.07c0 1.64 1.34 2.99 2.99 2.99h121.07c1.64 0 2.99-1.35 2.99-2.99V3.46c-.01-1.64-1.36-2.99-2.99-2.99m-4.4 119.67H7.86V7.85h112.28z"></svg:path><svg:path fill="#ed6c30" fill-rule="evenodd" d="m116.12 34.88l-9.32-9.33l-57.68 58.24L21.2 56.04l-9.32 9.33l37.28 37.07l5.92-5.92l-.02-.03z" clip-rule="evenodd"></svg:path>`,
})
export class NotoV1CheckBoxWithCheckIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

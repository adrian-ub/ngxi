import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBoneLineDuotoneIcon],svg[solar-bone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M10.931 16.631c-.393.394-.369 1.043-.22 1.58c.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848c.536.149 1.185.173 1.579-.22m9.262-2.138c.394-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579"></svg:path><svg:path fill="currentColor" d="M17.161 11.462a.75.75 0 0 0-1.06-1.06zM13.6 7.899a.75.75 0 0 0-1.06-1.06zm-2.137 9.263l5.7-5.7l-1.061-1.06l-5.7 5.699zM7.9 13.599l5.7-5.7l-1.06-1.06l-5.7 5.7z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

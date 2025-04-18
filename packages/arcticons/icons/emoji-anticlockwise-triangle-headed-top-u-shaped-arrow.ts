import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiAnticlockwiseTriangleHeadedTopUShapedArrowIcon],svg[arcticons-emoji-anticlockwise-triangle-headed-top-u-shaped-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.51 30.029l10.995 10.996L42.5 30.029"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.505 41.025V19.978c0-7.181-5.821-13.003-13.002-13.003h0C11.32 6.975 5.5 12.797 5.5 19.978v21.047"></svg:path>`,
})
export class ArcticonsEmojiAnticlockwiseTriangleHeadedTopUShapedArrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

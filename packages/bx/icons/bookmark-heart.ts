import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBookmarkHeartIcon],svg[bx-bookmark-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22V4c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v18l8-4.572zM6 10V4h12v14.553l-6-3.428l-6 3.428z"></svg:path><svg:path fill="currentColor" d="M15.409 9.512c.361-.372.585-.888.585-1.456s-.223-1.083-.585-1.456a1.96 1.96 0 0 0-1.412-.603S13.001 5.994 12 7.026c-1.001-1.032-1.997-1.029-1.997-1.029c-.552 0-1.051.23-1.412.603c-.362.373-.585.887-.585 1.456s.223 1.084.585 1.456L12 13.203z"></svg:path>`,
})
export class BxBookmarkHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

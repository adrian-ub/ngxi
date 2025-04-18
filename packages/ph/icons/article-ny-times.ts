import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesIcon],svg[ph-article-ny-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96h104a8 8 0 0 1 0 16H128a8 8 0 0 1 0-16m104 32H128a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16M96 144a8 8 0 0 0 0-16h-8V64h32v8a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-8h32v64h-8a8 8 0 0 0 0 16Z"></svg:path>`,
})
export class PhArticleNyTimesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

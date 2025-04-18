import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesLightIcon],svg[ph-article-ny-times-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 98h104a6 6 0 0 1 0 12H128a6 6 0 0 1 0-12m104 32H128a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12M96 142a6 6 0 0 0 0-12H86V62h36v10a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H32a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0V62h36v68H64a6 6 0 0 0 0 12Z"></svg:path>`,
})
export class PhArticleNyTimesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

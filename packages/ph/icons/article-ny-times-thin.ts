import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesThinIcon],svg[ph-article-ny-times-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 100h104a4 4 0 0 1 0 8H128a4 4 0 0 1 0-8m104 32H128a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8M96 140a4 4 0 0 0 0-8H84V60h40v12a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0V60h40v72H64a4 4 0 0 0 0 8Z"></svg:path>`,
})
export class PhArticleNyTimesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesBoldIcon],svg[ph-article-ny-times-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 92a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12m76 28h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24m0 40H80a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24M96 144a12 12 0 0 0 0-24h-4V68h24v4a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-4h24v52h-4a12 12 0 0 0 0 24Z"></svg:path>`,
})
export class PhArticleNyTimesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

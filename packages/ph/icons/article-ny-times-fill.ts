import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArticleNyTimesFillIcon],svg[ph-article-ny-times-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M64 92a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h72a8 8 0 0 1 8 8v12a8 8 0 0 1-16 0v-4h-20v48h4a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16h4V88H64Zm136 92H80a8 8 0 0 1 0-16h120a8 8 0 0 1 0 16m0-32h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhArticleNyTimesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

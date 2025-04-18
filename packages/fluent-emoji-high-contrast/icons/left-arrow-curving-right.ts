import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastLeftArrowCurvingRightIcon],svg[fluent-emoji-high-contrast-left-arrow-curving-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.361 14.5c0-4.141 3.132-7.498 6.997-7.5h6.003a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6c-1.401 0-3 1.303-3 3.5s1.599 3.5 3 3.5h6.75a.25.25 0 0 0 .25-.25v-2.246a.75.75 0 0 1 1.301-.509l4.23 4.578a.75.75 0 0 1 0 1.018l-4.23 4.578a.75.75 0 0 1-1.3-.509v-2.41a.25.25 0 0 0-.25-.25h-6.75c-3.867 0-7-3.358-7-7.5"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastLeftArrowCurvingRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

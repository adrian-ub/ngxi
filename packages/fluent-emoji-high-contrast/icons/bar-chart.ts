import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastBarChartIcon],svg[fluent-emoji-high-contrast-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-2 2.83V7.208C27 6.539 26.453 6 25.774 6h-3.548C21.547 6 21 6.54 21 7.209V29h-2V18.214c0-.672-.547-1.214-1.226-1.214h-3.548c-.679 0-1.226.542-1.226 1.214V29h-2V10.214C11 9.542 10.453 9 9.774 9H6.226C5.547 9 5 9.542 5 10.213V28.83A3 3 0 0 1 3 26z"></svg:path>`,
})
export class FluentEmojiHighContrastBarChartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

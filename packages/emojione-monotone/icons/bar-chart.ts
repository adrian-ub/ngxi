import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneBarChartIcon],svg[emojione-monotone-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M49.501 8.249L38.251 20.75h-5l-11.25 12.499H17l-11.25 12.5V2H2v60h60V8.249zM27.626 56.375h-9.688V35.124h9.688zm16.25 0h-9.688v-33.75h9.688zm16.249 0h-9.687V10.124h9.687z"></svg:path>`,
})
export class EmojioneMonotoneBarChartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

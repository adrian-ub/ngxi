import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneChartIncreasingWithYenIcon],svg[emojione-chart-increasing-with-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4bd37b"></svg:circle><svg:path fill="#fff" d="M34.1 18.8L43 10h-6.1L32 14.9L27.1 10H21l8.8 8.8h-4.5v4.3h4.5v4.3h-4.5v4.3h4.5V36h4.3v-4.3h4.6v-4.3h-4.6v-4.3h4.6v-4.3zm16 14l-4.3-2.9L39 41.8L34 39l-4 7.7l-4.5-3.2l-6.5 8.7c1.4.7 2.8 1.3 4.3 1.8l3.2-4.4l5.1 3.6L36 45l4.9 2.7l6.6-11.5l4 2.7l5.7-8.5c0-2.2-.4-4.4-1.1-6.5z"></svg:path>`,
})
export class EmojioneChartIncreasingWithYenIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

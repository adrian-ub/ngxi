import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastOrangeCircleIcon],svg[fluent-emoji-high-contrast-orange-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1c8.284 0 15 6.716 15 15s-6.716 15-15 15S1 24.284 1 16S7.716 1 16 1m-1.364 2.07L3.071 14.637a13.2 13.2 0 0 0 .101 3.485l14.949-14.95a13 13 0 0 0-3.485-.101m-1.708.295a13.02 13.02 0 0 0-9.563 9.563zM3.419 19.288c.237.909.57 1.779.987 2.599l17.48-17.48a13 13 0 0 0-2.598-.988zM22.793 4.914l-17.88 17.88c.45.73.968 1.412 1.548 2.038L24.832 6.461a13 13 0 0 0-2.039-1.547m2.746 2.254L7.168 25.539q.94.872 2.039 1.547l17.88-17.88a13 13 0 0 0-1.548-2.038m2.055 2.945l-17.48 17.48c.82.418 1.69.75 2.598.988l15.869-15.869a13 13 0 0 0-.987-2.599m1.234 3.766L13.879 28.828a13 13 0 0 0 3.484.101L28.93 17.364a13 13 0 0 0-.101-3.485m-.193 5.193l-9.563 9.563a13.02 13.02 0 0 0 9.563-9.563"></svg:path>`,
})
export class FluentEmojiHighContrastOrangeCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

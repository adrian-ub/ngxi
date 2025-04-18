import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastAButtonBloodTypeIcon],svg[fluent-emoji-high-contrast-a-button-blood-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.907 7.689a1.75 1.75 0 0 1 1.63 1.09L22.886 21.9a1.75 1.75 0 1 1-3.241 1.322l-.734-1.801a.13.13 0 0 0-.116-.078h-5.613a.13.13 0 0 0-.116.079l-.704 1.782a1.75 1.75 0 0 1-3.255-1.286l5.182-13.122a1.75 1.75 0 0 1 1.618-1.107m1.475 9.982l-1.322-3.244a.125.125 0 0 0-.232 0l-1.281 3.245a.125.125 0 0 0 .116.17h2.603c.09 0 .15-.09.116-.171"></svg:path><svg:path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastAButtonBloodTypeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

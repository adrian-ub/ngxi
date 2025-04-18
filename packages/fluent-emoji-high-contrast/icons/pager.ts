import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastPagerIcon],svg[fluent-emoji-high-contrast-pager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.51 16.25c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.44 1-1 1m0 3.99c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .56-.44 1-1 1m3-4.99c0 .55.45 1 1 1s.99-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1zm1 4.99c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c-.01.56-.45 1-1 1m3.98-4.99c0 .55.45 1 1 1c.56 0 1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1zm1 4.99c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .56-.44 1-1 1m3-4.99c0 .55.45 1 1 1s.99-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1zm1 4.99c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c-.01.56-.45 1-1 1"></svg:path><svg:path d="M5 30h22c1.66 0 3-1.34 3-3V12c0-1.66-1.34-3-3-3H5c-1.66 0-3 1.34-3 3v15c0 1.66 1.34 3 3 3m-1-8.5V12c0-.55.45-1 1-1h22c.55 0 1 .45 1 1v9.5c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1m6.48 6.5H5.49C4.67 28 4 27.33 4 26.51c0-.83.67-1.5 1.5-1.5h4.99c.83 0 1.5.67 1.5 1.5c-.01.82-.68 1.49-1.51 1.49m4.49 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h4.99c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm11.52 0h-2.04c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h2.04c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastPagerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

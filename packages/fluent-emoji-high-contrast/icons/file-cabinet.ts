import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFileCabinetIcon],svg[fluent-emoji-high-contrast-file-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.367 5.73c0-.633.514-1.163 1.163-1.163h4.9c.633 0 1.163.514 1.163 1.163v1.58c0 .646-.517 1.163-1.163 1.163h-4.9a1.164 1.164 0 0 1-1.163-1.163zm1.163-.417a.42.42 0 0 0-.417.417v1.58c0 .231.19.417.417.417h4.9a.413.413 0 0 0 .417-.417V5.73a.42.42 0 0 0-.417-.417zm-1.17 5.617a.75.75 0 0 1 .75-.75h5.72a.75.75 0 0 1 0 1.5h-5.72a.75.75 0 0 1-.75-.75m.007 8.22c0-.633.514-1.163 1.163-1.163h4.9c.633 0 1.163.514 1.163 1.163v1.58c0 .646-.517 1.163-1.163 1.163h-4.9a1.164 1.164 0 0 1-1.163-1.163zm1.163-.417a.42.42 0 0 0-.417.417v1.58c0 .231.19.417.417.417h4.9a.413.413 0 0 0 .417-.417v-1.58a.42.42 0 0 0-.417-.417zm-1.17 5.617a.75.75 0 0 1 .75-.75h5.72a.75.75 0 0 1 0 1.5h-5.72a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M9.61 1A3.615 3.615 0 0 0 6 4.617v22.767A3.615 3.615 0 0 0 9.61 31h12.78A3.615 3.615 0 0 0 26 27.384V4.617A3.615 3.615 0 0 0 22.39 1zm.135 14.5A1.75 1.75 0 0 1 8 13.74V4.76C8 3.784 8.778 3 9.745 3h12.51C23.222 3 24 3.784 24 4.76v8.98c.01.966-.778 1.76-1.735 1.76zm0 13.5A1.75 1.75 0 0 1 8 27.24v-8.98c0-.976.778-1.76 1.745-1.76h12.51c.967 0 1.745.784 1.745 1.76v8.98c.01.966-.778 1.76-1.735 1.76z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastFileCabinetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

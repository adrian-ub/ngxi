import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownloadOff48RegularIcon],svg[fluent-arrow-download-off-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.875 31.643l11.991 11.99a1.25 1.25 0 0 0 1.768-1.767l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L22.75 24.518v8.214l-8.366-8.366a1.25 1.25 0 0 0-1.768 1.768l10.5 10.5a1.25 1.25 0 0 0 1.768 0zm-1.768-1.768l-2.857 2.857v-5.714zm7.277-3.741l-2.327 2.327l-1.768-1.768l2.327-2.327a1.25 1.25 0 0 1 1.768 1.768M25.25 6.25v14.404l-2.5-2.5V6.25a1.25 1.25 0 1 1 2.5 0m-14 34.25a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentArrowDownloadOff48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastCircledMIcon],svg[fluent-emoji-high-contrast-circled-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.238 10.814a1.375 1.375 0 0 0-2.27-1.044l-4.917 4.216a.125.125 0 0 1-.16.002l-4.892-3.94a1.375 1.375 0 0 0-2.237 1.072v10.454a1.375 1.375 0 1 0 2.75 0v-7.32c0-.105.121-.164.203-.098l3.422 2.756a1.375 1.375 0 0 0 1.757-.027l3.388-2.905a.125.125 0 0 1 .206.095v7.5a1.375 1.375 0 1 0 2.75 0z"></svg:path><svg:path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15s15-6.716 15-15S24.284 1 16 1M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastCircledMIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastPotatoIcon],svg[fluent-emoji-high-contrast-potato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.967 7.946a1.4 1.4 0 1 0 0-2.8a1.4 1.4 0 0 0 0 2.8m.36 5.55a1.83 1.83 0 1 1-3.66 0a1.83 1.83 0 0 1 3.66 0m-8.65 5.51a1.68 1.68 0 1 1-3.36 0a1.68 1.68 0 0 1 3.36 0m-.37 6.03a1.16 1.16 0 1 0 0-2.32a1.16 1.16 0 0 0 0 2.32m14.35-10.38a1.16 1.16 0 1 1-2.32 0a1.16 1.16 0 0 1 2.32 0"></svg:path><svg:path d="M23.684 2.021A10.706 10.706 0 0 0 10.49 5.374l-5.24 7.14c-4.323 5.888-2.188 14.26 4.42 17.367c5.834 2.746 12.772.206 15.474-5.635a2294 2294 0 0 0 2.413-5.225l1.297-2.817c2.46-5.34.154-11.67-5.171-14.183m-11.58 4.536A8.706 8.706 0 0 1 22.83 3.83c4.335 2.046 6.209 7.196 4.209 11.537l-1.297 2.816v.002c-.65 1.41-.665 1.444-2.413 5.22c-2.237 4.839-7.98 6.938-12.806 4.666c-5.471-2.573-7.237-9.502-3.66-14.374z"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastPotatoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

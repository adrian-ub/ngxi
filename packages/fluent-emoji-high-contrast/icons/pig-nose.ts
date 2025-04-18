import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastPigNoseIcon],svg[fluent-emoji-high-contrast-pig-nose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 25.5c-1.52 0-2.75-1.23-2.75-2.75v-3.88c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v3.88c0 1.52-1.23 2.75-2.75 2.75m9.25-2.75c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75v-3.88c0-1.52-1.23-2.75-2.75-2.75s-2.75 1.23-2.75 2.75z"></svg:path><svg:path d="M1 21.776C1.12 13.514 7.894 8 16 8s14.88 5.514 15 13.776v.223A9 9 0 0 1 22 31H10c-4.972 0-9-4.028-9-9zm2 .021V22c0 3.867 3.132 7 7 7h12c3.868 0 7-3.132 7-7v-.202C28.895 14.824 23.211 10 16 10S3.104 14.823 3 21.797"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastPigNoseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

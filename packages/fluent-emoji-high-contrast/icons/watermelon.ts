import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastWatermelonIcon],svg[fluent-emoji-high-contrast-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m28.83 21.03l.58.58c.68.68.68 1.78.01 2.47l-1.38 1.38c-5.95 5.96-15.61 5.96-21.57 0C.51 19.51.51 9.85 6.47 3.89l1.38-1.38c.68-.68 1.78-.68 2.46 0l.58.58l-2.7 2.7c-4.95 4.95-4.95 12.99 0 17.94s12.99 4.95 17.94 0z"></svg:path><svg:path d="m27.64 19.84l-2.86 2.86C20.48 27 13.5 27 9.2 22.7s-4.3-11.28 0-15.58l2.857-2.856zm-13.69-9.08a1.09 1.09 0 1 0-2.18 0a1.09 1.09 0 0 0 2.18 0m-2.43 6.64a1.09 1.09 0 1 0 0-2.18a1.09 1.09 0 0 0 0 2.18m4.08 4.08a1.09 1.09 0 1 0 0-2.18a1.09 1.09 0 0 0 0 2.18m1.35-5.54a1.09 1.09 0 1 0 0-2.18a1.09 1.09 0 0 0 0 2.18m5.28 3.11a1.09 1.09 0 1 0-2.18 0a1.09 1.09 0 0 0 2.18 0"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastWatermelonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

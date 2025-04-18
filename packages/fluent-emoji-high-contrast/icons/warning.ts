import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastWarningIcon],svg[fluent-emoji-high-contrast-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.999 22.898c-.78 0-1.4-.63-1.4-1.4v-9.17c0-.78.63-1.4 1.4-1.4c.78 0 1.4.63 1.4 1.4v9.16a1.4 1.4 0 0 1-1.4 1.41m1.4 2.58a1.4 1.4 0 1 1-2.8 0a1.4 1.4 0 0 1 2.8 0"></svg:path><svg:path d="M13.976 5.163c.906-1.55 3.14-1.55 4.046 0l.003.005l12.664 21.937c.882 1.556-.222 3.503-2.03 3.503H3.339c-1.807 0-2.915-1.959-2.028-3.508l.002-.003l12.66-21.93zm1.727 1.007v.002L3.046 28.095h-.001a.343.343 0 0 0 .293.513h25.32a.34.34 0 0 0 .291-.515L16.296 6.172l-.001-.002a.342.342 0 0 0-.592 0"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

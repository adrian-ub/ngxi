import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastNoSmokingIcon],svg[fluent-emoji-high-contrast-no-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m22.603 9.817l-.342 1.056a2 2 0 0 0 .136 1.553l.404.763a2 2 0 0 1 .233.937v1.133c0 .24.303.342.449.152l.702-.922a2 2 0 0 0 .05-2.355l-.685-.984a2 2 0 0 1-.297-.65l-.17-.667c-.061-.243-.402-.254-.48-.016M23 16.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></svg:path><svg:path d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-5.233 6.645A10.95 10.95 0 0 0 27 16c0-6.075-4.925-11-11-11c-2.497 0-4.8.832-6.645 2.233L18.12 16h3.629a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25h-.629zm-2.122 2.122L16.88 19H8a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h5.879L7.233 9.355A10.95 10.95 0 0 0 5 16c0 6.075 4.925 11 11 11c2.497 0 4.8-.832 6.645-2.233"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastNoSmokingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

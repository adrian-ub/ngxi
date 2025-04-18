import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastHouseIcon],svg[fluent-emoji-high-contrast-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#fluentEmojiHighContrastHouse0)"><svg:path d="M23.14 21.002h-4.28c-.48 0-.86-.38-.86-.86v-4.28c0-.47.38-.86.86-.86h4.28c.47 0 .86.38.86.86v4.28c0 .48-.38.86-.86.86"></svg:path><svg:path d="m18.28.923l.004.005l12.755 12.565l.003.003a3.17 3.17 0 0 1-.003 4.546a3.2 3.2 0 0 1-2.039.916v6.151a3.91 3.91 0 0 1 3 3.803v2.09H0v-2.09a3.904 3.904 0 0 1 3-3.804v-6.11a3.23 3.23 0 0 1-2.04-.917a3.183 3.183 0 0 1-.002-4.555l.003-.002L4 10.532v-7.01C4 2.059 5.208 1 6.543 1h2.924c1.102 0 2.092.72 2.42 1.769L13.752.93c1.26-1.252 3.28-1.228 4.526-.008M10 7.432v-3.91A.53.53 0 0 0 9.467 3H6.543A.53.53 0 0 0 6 3.523v7.846zm-5 8.314v11.256h2c0-.55.45-1 1-1v-9.61c0-.75.61-1.36 1.36-1.36h5.29c.75 0 1.36.61 1.36 1.36v9.612c.527.026.95.465.95.998H27V15.706L16.02 4.893zm10 4.756a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0"></svg:path></svg:g><svg:defs><svg:clippath id="fluentEmojiHighContrastHouse0"><svg:path fill="#fff" d="M0 0h32v32H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class FluentEmojiHighContrastHouseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

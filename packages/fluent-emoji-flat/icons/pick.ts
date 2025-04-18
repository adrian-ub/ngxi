import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPickIcon],svg[fluent-emoji-flat-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7D4533" d="m8.99 11.91l2.92-2.92l-1.48-1.48a.646.646 0 0 0-.91 0L7.51 9.52c-.25.25-.25.66 0 .91zm19.18 17.81l1.55-1.55c.37-.38.37-.99 0-1.37L15.81 12.89L12 12.5l.89 3.31L26.8 29.72c.38.38.99.38 1.37 0"></svg:path><svg:path fill="#B4ACBC" d="M21.98 2.02c-4.13 1.02-9.03 3.5-12.74 7.22s-6.2 8.61-7.22 12.74c-.16.66.65 1.12 1.14.64l7.27-7.27c.15-.15.4-.15.55 0l.82.82c.2.2.53.2.73 0l3.65-3.65c.2-.2.2-.53 0-.73l-.82-.82a.39.39 0 0 1 0-.55l7.27-7.27c.47-.48.02-1.29-.65-1.13"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPickIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingDown20RegularIcon],svg[fluent-padding-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.354 11.354l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 0 1 .708-.708L9 14.293V4.5a.5.5 0 0 1 1 0v9.793l3.646-3.647a.5.5 0 0 1 .708.708M3.5 3a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zm0 15a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm3 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zm4 0a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zm4 0a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class FluentPaddingDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

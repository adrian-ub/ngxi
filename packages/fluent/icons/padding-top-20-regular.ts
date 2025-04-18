import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingTop20RegularIcon],svg[fluent-padding-top-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9.854 4.146a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 1 0 .708.708L9 5.707V15.5a.5.5 0 0 0 1 0V5.707l3.646 3.647a.5.5 0 0 0 .708-.708zM3.5 17a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentPaddingTop20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

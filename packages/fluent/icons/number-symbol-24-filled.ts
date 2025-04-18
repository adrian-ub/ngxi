import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberSymbol24FilledIcon],svg[fluent-number-symbol-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.985 3.165a1 1 0 0 0-1.973-.33l-.86 5.163L3.998 8A1 1 0 1 0 4 10l3.817-.002l-.667 4L3 14a1 1 0 1 0 0 2l3.817-.002l-.807 4.838a1 1 0 1 0 1.973.329l.862-5.167l4.975-.003l-.806 4.84a1 1 0 1 0 1.972.33l.862-5.17L20 15.992a1 1 0 0 0 0-2l-3.819.001l.667-4.001l4.153-.003a1 1 0 0 0-.002-2l-3.817.002l.804-4.827a1 1 0 1 0-1.972-.33l-.86 5.159l-4.975.003zm-1.14 6.832l4.976-.003l-.667 4.001l-4.976.002z"></svg:path>`,
})
export class FluentNumberSymbol24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTablet24RegularIcon],svg[fluent-tablet-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.749 4a2.25 2.25 0 0 1 2.25 2.25v11.502a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.752V6.25A2.25 2.25 0 0 1 4.25 4zm0 1.5H4.25a.75.75 0 0 0-.75.75v11.502c0 .415.336.75.75.75h15.499a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75m-9.499 10h3.5a.75.75 0 0 1 .102 1.494L13.75 17h-3.5a.75.75 0 0 1-.102-1.493zh3.5z"></svg:path>`,
})
export class FluentTablet24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

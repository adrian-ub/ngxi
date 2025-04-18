import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDescription28RegularIcon],svg[fluent-text-description-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.754 6a.75.75 0 1 0 0 1.5H25.25a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5H25.25a.75.75 0 0 0 0-1.5zm-.75 5.75a.75.75 0 0 1 .75-.75H25.25a.75.75 0 0 1 0 1.5H2.755a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5H18.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextDescription28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

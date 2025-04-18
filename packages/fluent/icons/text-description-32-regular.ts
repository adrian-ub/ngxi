import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDescription32RegularIcon],svg[fluent-text-description-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0 0 2h26a1 1 0 1 0 0-2zm0 6a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zm-1 7a1 1 0 0 0 1 1h26a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1m1 5a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTextDescription32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

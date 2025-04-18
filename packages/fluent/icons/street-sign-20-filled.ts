import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStreetSign20FilledIcon],svg[fluent-street-sign-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a2 2 0 1 1 4 0v1h2.379a2 2 0 0 1 1.414.586l2.06 2.06a.5.5 0 0 1 0 .708l-2.06 2.06a2 2 0 0 1-1.414.586H11v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2zm3 0a1 1 0 0 0-2 0v1h2zM8 17h2v-6H8z"></svg:path>`,
})
export class FluentStreetSign20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

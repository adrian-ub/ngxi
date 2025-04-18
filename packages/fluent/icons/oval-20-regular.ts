import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOval20RegularIcon],svg[fluent-oval-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6m6-5a5 5 0 0 0 0 10h4a5 5 0 0 0 0-10z"></svg:path>`,
})
export class FluentOval20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

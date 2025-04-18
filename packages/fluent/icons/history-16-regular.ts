import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory16RegularIcon],svg[fluent-history-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a5 5 0 1 1-4.98 5.455a.5.5 0 0 0-.996.09A6 6 0 1 0 3.499 4.03V2.5a.5.5 0 1 0-1 0v3A.5.5 0 0 0 3 6h3a.5.5 0 1 0 0-1H4a5 5 0 0 1 4-2m0 2.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 1 0 0-1H8z"></svg:path>`,
})
export class FluentHistory16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

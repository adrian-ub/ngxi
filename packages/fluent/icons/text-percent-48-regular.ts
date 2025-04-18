import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPercent48RegularIcon],svg[fluent-text-percent-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.998 6.214a1.25 1.25 0 0 1 .337 1.735l-22.596 33.5a1.25 1.25 0 1 1-2.073-1.398l22.597-33.5a1.25 1.25 0 0 1 1.735-.337M13.5 8.5a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8.5 6a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0m23.5 19a6 6 0 1 1 12 0a6 6 0 0 1-12 0m6-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17"></svg:path>`,
})
export class FluentTextPercent48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

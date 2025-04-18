import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableChecker20RegularIcon],svg[fluent-table-checker-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.5V11h1V5.5A2.5 2.5 0 0 0 14.5 3H9v1h5.5A1.5 1.5 0 0 1 16 5.5M3 9v5.5A2.5 2.5 0 0 0 5.5 17H11v-1H5.5A1.5 1.5 0 0 1 4 14.5V9zm2.5-6H8v4h5v5h4v2.5a2.5 2.5 0 0 1-2.5 2.5H12v-4H7V8H3V5.5A2.5 2.5 0 0 1 5.5 3m9 13a1.5 1.5 0 0 0 1.493-1.355L16 14.5V13h-3v3zM12 8H8v4h4zM4 7h3V4H5.5a1.5 1.5 0 0 0-1.493 1.356L4 5.5z"></svg:path>`,
})
export class FluentTableChecker20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

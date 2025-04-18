import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCompassIcon],svg[carbon-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path><svg:path fill="currentColor" d="M23 10.41L21.59 9l-4.3 4.3a3 3 0 0 0-4 4L9 21.59L10.41 23l4.3-4.3a3 3 0 0 0 4-4ZM17 16a1 1 0 1 1-1-1a1 1 0 0 1 1 1"></svg:path><svg:circle cx="16" cy="7.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class CarbonCompassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

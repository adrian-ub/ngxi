import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle420RegularIcon],svg[fluent-number-circle-4-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0m7-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16m1.995 4.309c0-.738-.954-1.032-1.37-.423l-3.533 5.176a.6.6 0 0 0 .496.938h3.41v1.5a.5.5 0 0 0 1 0V12H13a.5.5 0 0 0 0-1h-1.003zm-1 .809L10.997 11H8.345z"></svg:path>`,
})
export class FluentNumberCircle420RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDishwasher32RegularIcon],svg[fluent-dishwasher-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-14c0-.818-.393-1.544-1-2h15a2.5 2.5 0 0 0 2.5-2.5V13H5v.5H3zm24 0A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5V11h22zM11.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M16 8a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M3 15a1 1 0 0 0-1 1v3.25a4.5 4.5 0 0 0 3.5 4.389V28H5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-.5v-4.361A4.5 4.5 0 0 0 11 19.25V16a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentDishwasher32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

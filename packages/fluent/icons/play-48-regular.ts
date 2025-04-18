import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlay48RegularIcon],svg[fluent-play-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.75 8.412l24.417 12.705a3.25 3.25 0 0 1 0 5.766L16.75 39.588A3.25 3.25 0 0 1 12 36.705v-25.41a3.25 3.25 0 0 1 4.549-2.98zm-1.154 2.218l-.11-.047a.75.75 0 0 0-.986.712v25.41a.75.75 0 0 0 1.096.665l24.417-12.705a.75.75 0 0 0 0-1.33z"></svg:path>`,
})
export class FluentPlay48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

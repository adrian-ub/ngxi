import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOven32RegularIcon],svg[fluent-oven-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zm24 0A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5V11h22zm0 17V13H5v11.5A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5m-17-15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M23.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M9 23v-6h14v6zm-.5-8A1.5 1.5 0 0 0 7 16.5v7A1.5 1.5 0 0 0 8.5 25h15a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class FluentOven32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

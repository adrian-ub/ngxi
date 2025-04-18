import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompose32LightIcon],svg[fluent-compose-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.854 2.854a.5.5 0 0 0-.708-.708L13.293 18L13 19l1-.293zM4 7.5A3.5 3.5 0 0 1 7.5 4h12a.5.5 0 0 0 0-1h-12A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-12a.5.5 0 0 0-1 0v12a3.5 3.5 0 0 1-3.5 3.5h-17A3.5 3.5 0 0 1 4 24.5z"></svg:path>`,
})
export class FluentCompose32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

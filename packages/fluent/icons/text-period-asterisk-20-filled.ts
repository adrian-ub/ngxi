import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPeriodAsterisk20FilledIcon],svg[fluent-text-period-asterisk-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.246 4.75a.75.75 0 0 0-1.5 0v1.858l-1.764-.573a.75.75 0 1 0-.464 1.426l1.768.575L9.194 9.54a.75.75 0 0 0 1.214.882l1.09-1.502l1.092 1.502a.75.75 0 1 0 1.213-.882L12.71 8.037l1.771-.576a.75.75 0 1 0-.463-1.426l-1.772.575zM6.5 16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentTextPeriodAsterisk20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

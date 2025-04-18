import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarLock48FilledIcon],svg[fluent-calendar-lock-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25V14H6zm0 4.25v19.25A6.25 6.25 0 0 0 12.25 42H26v-9a5 5 0 0 1 4.059-4.912A7.001 7.001 0 0 1 42 24.101V16.5zM32 30h-1a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V33a3 3 0 0 0-3-3h-1v-1a5 5 0 0 0-10 0zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5zm5.5 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class FluentCalendarLock48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

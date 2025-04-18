import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOven32FilledIcon],svg[fluent-oven-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V12H3zm5.5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M22 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3 14v10.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5V14zm5.5 3h15a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 7 23.5v-5A1.5 1.5 0 0 1 8.5 17"></svg:path>`,
})
export class FluentOven32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

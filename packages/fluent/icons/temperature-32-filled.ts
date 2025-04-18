import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperature32FilledIcon],svg[fluent-temperature-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.5a3.25 3.25 0 0 0-3.25 3.25v9.754l-.313.354a4.75 4.75 0 1 0 7.126 0l-.313-.354V8.75A3.25 3.25 0 0 0 16 5.5m-5.75 3.25a5.75 5.75 0 0 1 11.5 0v8.834a7.25 7.25 0 1 1-11.5 0zm4.5 3.5a1.25 1.25 0 1 1 2.5 0v7.022a3 3 0 1 1-2.5 0z"></svg:path>`,
})
export class FluentTemperature32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

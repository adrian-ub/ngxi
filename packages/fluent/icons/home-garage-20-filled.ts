import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeGarage20FilledIcon],svg[fluent-home-garage-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.005 2.386a1.5 1.5 0 0 0-2.01 0l-5.5 4.96A1.5 1.5 0 0 0 3 8.458v7.04A1.5 1.5 0 0 0 4.5 17H6v-4.5A1.5 1.5 0 0 1 7.5 11h5a1.5 1.5 0 0 1 1.5 1.5V17h1.5a1.5 1.5 0 0 0 1.5-1.5V8.46a1.5 1.5 0 0 0-.495-1.115zM13 14v-1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V14zm-6 1h6v2H7z"></svg:path>`,
})
export class FluentHomeGarage20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

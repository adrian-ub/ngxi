import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCamera20FilledIcon],svg[fluent-camera-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-.216-7.174A1.5 1.5 0 0 1 8.124 2h3.764a1.5 1.5 0 0 1 1.342.83L13.815 4h1.69a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-11a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h1.69zM10 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class FluentCamera20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

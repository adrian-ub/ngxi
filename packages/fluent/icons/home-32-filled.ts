import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHome32FilledIcon],svg[fluent-home-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.895 2.777a3.25 3.25 0 0 1 4.21 0l9.75 8.287A3.25 3.25 0 0 1 29 13.54V26.5a2.5 2.5 0 0 1-2.5 2.5h-4a2.5 2.5 0 0 1-2.5-2.5V20a2 2 0 0 0-1.991-2H13.99A2 2 0 0 0 12 20v6.5A2.5 2.5 0 0 1 9.5 29h-4A2.5 2.5 0 0 1 3 26.5V13.54a3.25 3.25 0 0 1 1.145-2.476z"></svg:path>`,
})
export class FluentHome32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

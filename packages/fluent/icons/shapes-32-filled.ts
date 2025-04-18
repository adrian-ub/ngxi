import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapes32FilledIcon],svg[fluent-shapes-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a9 9 0 0 1 17.876-1.5H16.5a6 6 0 0 0-6 6v4.376C6.243 20.16 3 16.459 3 12m9 4.5a4.5 4.5 0 0 1 4.5-4.5h8a4.5 4.5 0 0 1 4.5 4.5v8a4.5 4.5 0 0 1-4.5 4.5h-8a4.5 4.5 0 0 1-4.5-4.5z"></svg:path>`,
})
export class FluentShapes32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

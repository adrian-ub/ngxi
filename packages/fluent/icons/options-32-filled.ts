import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOptions32FilledIcon],svg[fluent-options-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 4.5A4.5 4.5 0 0 0 16.111 8H3a1 1 0 0 0 0 2h13.112a4.502 4.502 0 0 0 8.777 0H29a1 1 0 1 0 0-2h-4.111A4.5 4.5 0 0 0 20.5 4.5M15.889 22H29a1 1 0 1 1 0 2H15.889a4.502 4.502 0 0 1-8.777 0H3a1 1 0 1 1 0-2h4.112a4.502 4.502 0 0 1 8.777 0"></svg:path>`,
})
export class FluentOptions32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

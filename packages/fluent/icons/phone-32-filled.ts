import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhone32FilledIcon],svg[fluent-phone-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 2A3.25 3.25 0 0 0 7 5.25v21.5A3.25 3.25 0 0 0 10.25 30h11.5A3.25 3.25 0 0 0 25 26.75V5.25A3.25 3.25 0 0 0 21.75 2zM14 24h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2"></svg:path>`,
})
export class FluentPhone32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

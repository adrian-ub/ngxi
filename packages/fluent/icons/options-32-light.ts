import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOptions32LightIcon],svg[fluent-options-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 10h13.528a4.5 4.5 0 0 0 8.945 0H29.5a.5.5 0 0 0 0-1h-4.527a4.5 4.5 0 0 0-8.945 0H2.5a.5.5 0 0 0 0 1m18-4a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m-4.527 17a4.5 4.5 0 0 1-8.946 0H2.5a.5.5 0 0 1 0-1h4.527a4.5 4.5 0 0 1 8.946 0H29.5a.5.5 0 0 1 0 1zM8 22.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0"></svg:path>`,
})
export class FluentOptions32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

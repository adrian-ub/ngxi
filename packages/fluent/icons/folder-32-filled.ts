import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolder32FilledIcon],svg[fluent-folder-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.5A4.5 4.5 0 0 1 6.5 4h3.964a3.5 3.5 0 0 1 2.475 1.025L15 7.085l-3.475 3.476a1.5 1.5 0 0 1-1.06.439H2zM2 13v10.5A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5V12a4.5 4.5 0 0 0-4.5-4.5h-8.086l-4.475 4.475A3.5 3.5 0 0 1 10.464 13z"></svg:path>`,
})
export class FluentFolder32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOptions20FilledIcon],svg[fluent-options-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 5h-2.364a2.501 2.501 0 0 0-4.771 0H2.75a.75.75 0 0 0 0 1.5h7.365a2.501 2.501 0 0 0 4.77 0h2.365a.75.75 0 0 0 0-1.5m-14.5 8.5a.75.75 0 0 0 0 1.5h2.364a2.501 2.501 0 0 0 4.772 0h7.364a.75.75 0 0 0 0-1.5H9.886a2.501 2.501 0 0 0-4.772 0z"></svg:path>`,
})
export class FluentOptions20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

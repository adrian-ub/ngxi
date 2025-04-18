import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentExpandUpRight32FilledIcon],svg[fluent-expand-up-right-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5A2.5 2.5 0 0 0 5 7.5V16h7.23A3.77 3.77 0 0 1 16 19.77V27h8.5a2.5 2.5 0 0 0 2.5-2.5V19a1 1 0 1 1 2 0v5.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3H13a1 1 0 1 1 0 2zM18 4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V6.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L25.586 5H19a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentExpandUpRight32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

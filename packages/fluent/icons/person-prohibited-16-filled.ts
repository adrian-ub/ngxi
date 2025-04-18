import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonProhibited16FilledIcon],svg[fluent-person-prohibited-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m-2.803-2.404l4.9-4.9a3.5 3.5 0 0 0-4.9 4.9m.707.707a3.5 3.5 0 0 0 4.9-4.9zM9.626 5.07a5.5 5.5 0 0 0-3.299 1.848A2.751 2.751 0 1 1 9.626 5.07M5.6 8c-.384.75-.6 1.6-.6 2.5c0 1.31.458 2.512 1.222 3.457C3.555 13.653 2 11.803 2 10v-.5A1.5 1.5 0 0 1 3.5 8z"></svg:path>`,
})
export class FluentPersonProhibited16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRowChild32FilledIcon],svg[fluent-row-child-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h19.5A3.25 3.25 0 0 1 29 6.25v4.5A3.25 3.25 0 0 1 25.75 14H9v6.5a2.5 2.5 0 0 0 2.5 2.5H16v-1.75A3.25 3.25 0 0 1 19.25 18h6.5A3.25 3.25 0 0 1 29 21.25v4.5A3.25 3.25 0 0 1 25.75 29h-6.5A3.25 3.25 0 0 1 16 25.75V25h-4.5A4.5 4.5 0 0 1 7 20.5V14h-.75A3.25 3.25 0 0 1 3 10.75z"></svg:path>`,
})
export class FluentRowChild32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

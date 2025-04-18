import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailCopy20FilledIcon],svg[fluent-mail-copy-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.5V6.373l6.746 3.558a.5.5 0 0 0 .507 0L18 6.373V12.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 4 12.5m.015-7.277A2.5 2.5 0 0 1 6.5 3h9a2.5 2.5 0 0 1 2.485 2.223L11 8.92zM13.5 17c.818 0 1.544-.393 2-1h-9A3.5 3.5 0 0 1 3 12.5v-7c-.607.456-1 1.182-1 2v5A4.5 4.5 0 0 0 6.5 17z"></svg:path>`,
})
export class FluentMailCopy20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtractCircle24FilledIcon],svg[fluent-subtract-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-4.25 9.25a.75.75 0 0 0-.102 1.493l.102.007h8.5a.75.75 0 0 0 .102-1.493l-.102-.007z"></svg:path>`,
})
export class FluentSubtractCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

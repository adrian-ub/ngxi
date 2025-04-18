import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTicketDiagonal16FilledIcon],svg[fluent-ticket-diagonal-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.978 1.352a1.4 1.4 0 0 0-1.936.042L1.426 8.011a1.4 1.4 0 0 0 0 1.98l.926.925c.347.348.846.264 1.14.068a1.1 1.1 0 0 1 1.525 1.525c-.195.294-.279.794.068 1.141l.905.904a1.4 1.4 0 0 0 2.01-.03l6.598-7.012a1.4 1.4 0 0 0-.073-1.991l-.887-.813a.84.84 0 0 0-.726-.197c-.227.04-.442.16-.598.33a1.1 1.1 0 1 1-1.622-1.487c.157-.168.258-.393.279-.623a.84.84 0 0 0-.26-.706z"></svg:path>`,
})
export class FluentTicketDiagonal16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

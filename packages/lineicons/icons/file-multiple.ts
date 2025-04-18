import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFileMultipleIcon],svg[lineicons-file-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.892 16.733V4.25A2.25 2.25 0 0 0 14.642 2h-3.95a2.25 2.25 0 0 0-1.59.66L4.751 7.01a2.25 2.25 0 0 0-.658 1.59v8.132a2.25 2.25 0 0 0 2.25 2.25h8.298a2.25 2.25 0 0 0 2.25-2.25m-2.25.75H6.344a.75.75 0 0 1-.75-.75V8.731h2.98a2.25 2.25 0 0 0 2.25-2.251l-.001-2.98h3.82a.75.75 0 0 1 .75.75v12.483a.75.75 0 0 1-.75.75M6.653 7.231l2.67-2.672l.002 1.922a.75.75 0 0 1-.75.75z"></svg:path><svg:path fill="currentColor" d="M18.407 5.684a.75.75 0 0 1 1.5 0v11.567a4.75 4.75 0 0 1-4.75 4.75h-7.36a.75.75 0 0 1 0-1.5h7.36a3.25 3.25 0 0 0 3.25-3.25z"></svg:path>`,
})
export class LineiconsFileMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

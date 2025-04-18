import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentAdd32FilledIcon],svg[fluent-comment-add-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V8h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V9.5h-3.75a.75.75 0 0 1 0-1.5h3.75V4.25a.75.75 0 0 1 1.5 0M6.5 3h9.792A9 9 0 1 0 30 14.657V19.5a4.5 4.5 0 0 1-4.5 4.5h-7.631l-6.571 5.603C9.999 30.71 8 29.787 8 28.08V24H6.5A4.5 4.5 0 0 1 2 19.5v-12A4.5 4.5 0 0 1 6.5 3"></svg:path>`,
})
export class FluentCommentAdd32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

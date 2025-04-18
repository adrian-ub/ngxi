import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClass20FilledIcon],svg[fluent-class-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3v6.5a.5.5 0 0 1-.8.4L8.5 7.625L6.8 8.9a.5.5 0 0 1-.8-.4zm4 0H7v5.5l1.2-.9a.5.5 0 0 1 .6 0l1.2.9z"></svg:path>`,
})
export class FluentClass20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

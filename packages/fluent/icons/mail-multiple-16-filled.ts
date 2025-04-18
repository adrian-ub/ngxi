import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailMultiple16FilledIcon],svg[fluent-mail-multiple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.201L7 7.432l-6-3.23zm6.237 4.44L13 5.337V10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5.337L6.763 8.44a.5.5 0 0 0 .474 0M5 14a2 2 0 0 1-1.732-1H11a3 3 0 0 0 3-3V4.268A2 2 0 0 1 15 6v4a4 4 0 0 1-4 4z"></svg:path>`,
})
export class FluentMailMultiple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

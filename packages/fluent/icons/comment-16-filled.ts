import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComment16FilledIcon],svg[fluent-comment-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.942a.98.98 0 0 0 1.625.738L8.688 12H12.5A2.5 2.5 0 0 0 15 9.5v-5A2.5 2.5 0 0 0 12.5 2z"></svg:path>`,
})
export class FluentComment16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

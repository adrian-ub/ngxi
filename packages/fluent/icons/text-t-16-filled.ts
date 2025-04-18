import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextT16FilledIcon],svg[fluent-text-t-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2.75A.75.75 0 0 1 3.25 2h9a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3.5h-3v9h1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5H7v-9H4v.75a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentTextT16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

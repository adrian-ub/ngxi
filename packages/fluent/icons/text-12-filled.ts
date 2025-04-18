import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentText12FilledIcon],svg[fluent-text-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.75A.75.75 0 0 1 2.75 2h6a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3.5H6.5v5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5H5v-5H3.5v.75a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentText12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

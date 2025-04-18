import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextT20FilledIcon],svg[fluent-text-t-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.75A.75.75 0 0 1 4.75 3h10a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4.5h-3.5v11h1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5H9v-11H5.5v.75a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentTextT20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

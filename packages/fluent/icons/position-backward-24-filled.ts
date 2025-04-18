import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPositionBackward24FilledIcon],svg[fluent-position-backward-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6.5h-5.75a4.25 4.25 0 0 0-4.25 4.25v5.75H5.25A3.25 3.25 0 0 1 2 13.25v-8A3.25 3.25 0 0 1 5.25 2h8a3.25 3.25 0 0 1 3.25 3.25zM22 18.75A3.25 3.25 0 0 1 18.75 22h-8a3.25 3.25 0 0 1-3.25-3.25v-8a3.25 3.25 0 0 1 3.25-3.25h8A3.25 3.25 0 0 1 22 10.75zm-3.25 1.75a1.75 1.75 0 0 0 1.75-1.75v-8A1.75 1.75 0 0 0 18.75 9h-8A1.75 1.75 0 0 0 9 10.75v8c0 .966.784 1.75 1.75 1.75z"></svg:path>`,
})
export class FluentPositionBackward24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

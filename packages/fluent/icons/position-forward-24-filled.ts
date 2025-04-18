import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPositionForward24FilledIcon],svg[fluent-position-forward-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 16.5a3.25 3.25 0 0 0 3.25-3.25v-8A3.25 3.25 0 0 0 13.25 2h-8A3.25 3.25 0 0 0 2 5.25v8a3.25 3.25 0 0 0 3.25 3.25zm-5.75 1H9v1.25c0 .966.784 1.75 1.75 1.75h8a1.75 1.75 0 0 0 1.75-1.75v-8A1.75 1.75 0 0 0 18.75 9H17.5V7.5h1.25A3.25 3.25 0 0 1 22 10.75v8A3.25 3.25 0 0 1 18.75 22h-8a3.25 3.25 0 0 1-3.25-3.25z"></svg:path>`,
})
export class FluentPositionForward24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

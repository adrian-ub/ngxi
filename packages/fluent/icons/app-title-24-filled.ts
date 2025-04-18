import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppTitle24FilledIcon],svg[fluent-app-title-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 20.5h14.5a.75.75 0 0 1 .102 1.493L19.25 22H4.75a.75.75 0 0 1-.102-1.493zh14.5zM16.25 3A3.75 3.75 0 0 1 20 6.75v8.5A3.75 3.75 0 0 1 16.25 19h-8.5A3.75 3.75 0 0 1 4 15.25v-8.5A3.75 3.75 0 0 1 7.75 3z"></svg:path>`,
})
export class FluentAppTitle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

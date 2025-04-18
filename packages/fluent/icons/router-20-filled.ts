import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRouter20FilledIcon],svg[fluent-router-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 9.5a6.5 6.5 0 0 1 13 0a.5.5 0 0 0 1 0a7.5 7.5 0 0 0-15 0a.5.5 0 0 0 1 0m6.5-4a4 4 0 0 0-4 4a.5.5 0 0 1-1 0a5 5 0 0 1 10 0a.5.5 0 0 1-1 0a4 4 0 0 0-4-4M7.75 9.25a2.25 2.25 0 1 1 2.75 2.194V13h4a2.5 2.5 0 0 1 0 5h-9a2.5 2.5 0 0 1 0-5h4v-1.556A2.25 2.25 0 0 1 7.75 9.25"></svg:path>`,
})
export class FluentRouter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

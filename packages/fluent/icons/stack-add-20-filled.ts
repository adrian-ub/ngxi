import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStackAdd20FilledIcon],svg[fluent-stack-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V6H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H6zM5.5 12a5.5 5.5 0 0 0 4.9-8H12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.257A5.48 5.48 0 0 0 5.5 12m-1.232 3A2 2 0 0 0 6 16h6a4 4 0 0 0 4-4V8a2 2 0 0 0-1-1.732V12a3 3 0 0 1-3 3zm2 2A2 2 0 0 0 8 18h4a6 6 0 0 0 6-6v-2a2 2 0 0 0-1-1.732V12a5 5 0 0 1-5 5z"></svg:path>`,
})
export class FluentStackAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextCollapse24FilledIcon],svg[fluent-text-collapse-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a1 1 0 0 0 1 1h14a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1m7 5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1m-6 9h14a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2m6-4a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1m-2-2.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0m-2 0a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentTextCollapse24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

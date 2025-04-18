import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideTextMultiple16FilledIcon],svg[fluent-slide-text-multiple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 4.5A2.5 2.5 0 0 1 4 2h6.5A2.5 2.5 0 0 1 13 4.5v5a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5zm3-.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM4 8.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m6.5 4.5A3.5 3.5 0 0 0 14 9.5V3.671c.625.773 1 1.757 1 2.829v3a4.5 4.5 0 0 1-4.5 4.5h-4a4.48 4.48 0 0 1-2.829-1z"></svg:path>`,
})
export class FluentSlideTextMultiple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

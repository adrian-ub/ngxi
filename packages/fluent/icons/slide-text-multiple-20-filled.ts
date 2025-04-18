import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideTextMultiple20FilledIcon],svg[fluent-slide-text-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 15a2.5 2.5 0 0 0 2.5-2.5v-7q0-.14-.015-.277A2.5 2.5 0 0 0 13.5 3h-9A2.5 2.5 0 0 0 2 5.5v7q0 .26.05.504A2.5 2.5 0 0 0 4.485 15zm-8-9h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1m0 2.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m-.5 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5z"></svg:path>`,
})
export class FluentSlideTextMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

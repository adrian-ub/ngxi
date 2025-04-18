import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHighlightAccent16FilledIcon],svg[fluent-highlight-accent-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2v3a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V2zm-8 6.5h5v1.867a2 2 0 0 1-.971 1.716L5.5 14.5z"></svg:path>`,
})
export class FluentHighlightAccent16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

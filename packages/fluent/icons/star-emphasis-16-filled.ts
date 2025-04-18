import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarEmphasis16FilledIcon],svg[fluent-star-emphasis-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.194 2.102a.9.9 0 0 1 1.614 0l1.521 3.082l3.401.494a.9.9 0 0 1 .5 1.535l-2.462 2.4l.581 3.387a.9.9 0 0 1-1.306.948L8.001 12.35l-3.042 1.6A.9.9 0 0 1 3.653 13l.581-3.387l-2.461-2.399a.9.9 0 0 1 .499-1.535l3.4-.494zM.1 2.2a.5.5 0 0 1 .7-.1l2 1.5a.5.5 0 0 1-.6.8l-2-1.5a.5.5 0 0 1-.1-.7m15.1-.1a.5.5 0 0 1 .6.8l-2 1.5a.5.5 0 0 1-.6-.8zM.1 12.3a.5.5 0 0 0 .7.1l2-1.5a.5.5 0 0 0-.6-.8l-2 1.5a.5.5 0 0 0-.1.7m15.1.1a.5.5 0 0 0 .6-.8l-2-1.5a.5.5 0 0 0-.6.8z"></svg:path>`,
})
export class FluentStarEmphasis16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

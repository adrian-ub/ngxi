import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutoFitHeight20FilledIcon],svg[fluent-auto-fit-height-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 2a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm0 14.5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm6.03-1.72l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V7.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L9 7.56v4.88l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0"></svg:path>`,
})
export class FluentAutoFitHeight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

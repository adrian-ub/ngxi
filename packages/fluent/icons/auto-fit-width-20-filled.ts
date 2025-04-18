import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAutoFitWidth20FilledIcon],svg[fluent-auto-fit-width-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4.25a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0zm-14.5 0a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0zm1.72 6.03l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h4.88l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H7.56l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06"></svg:path>`,
})
export class FluentAutoFitWidth20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStackVertical20FilledIcon],svg[fluent-stack-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v10.75a.75.75 0 0 1-1.5 0V13.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v2.75a.75.75 0 0 1-1.5 0zm1.5 5.708a2.5 2.5 0 0 1 1-.208h9c.356 0 .694.074 1 .208V9.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zm11-5.708a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v1.708A2.5 2.5 0 0 1 5.5 7h9c.356 0 .694.074 1 .208z"></svg:path>`,
})
export class FluentStackVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

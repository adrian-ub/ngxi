import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderBottomDouble24FilledIcon],svg[fluent-border-bottom-double-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zm-8 6a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-1 7a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm0 3a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm16-11a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M7 4a1 1 0 0 0-1-1a3 3 0 0 0-3 3a1 1 0 0 0 2 0a1 1 0 0 1 1-1a1 1 0 0 0 1-1m11-1a1 1 0 1 0 0 2a1 1 0 0 1 1 1a1 1 0 1 0 2 0a3 3 0 0 0-3-3"></svg:path>`,
})
export class FluentBorderBottomDouble24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

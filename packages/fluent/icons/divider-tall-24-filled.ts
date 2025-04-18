import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDividerTall24FilledIcon],svg[fluent-divider-tall-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v18a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0"></svg:path>`,
})
export class FluentDividerTall24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

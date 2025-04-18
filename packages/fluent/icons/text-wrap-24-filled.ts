import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextWrap24FilledIcon],svg[fluent-text-wrap-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm12.414 0H19a2 2 0 1 0 0-4H3a1 1 0 1 1 0-2h16a4 4 0 0 1 0 8h-3.586l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 1.414z"></svg:path>`,
})
export class FluentTextWrap24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

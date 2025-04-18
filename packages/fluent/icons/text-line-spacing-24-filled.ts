import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextLineSpacing24FilledIcon],svg[fluent-text-line-spacing-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6.414V10a1 1 0 1 1-2 0V6.414l-.293.293a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414zM2 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm17-3v3.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.293.293V14a1 1 0 1 1 2 0"></svg:path>`,
})
export class FluentTextLineSpacing24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

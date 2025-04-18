import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond16RegularIcon],svg[fluent-diamond-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.732 9.769a2.5 2.5 0 0 1 0-3.536l4.501-4.5a2.5 2.5 0 0 1 3.536 0l4.5 4.5a2.5 2.5 0 0 1 0 3.536l-4.5 4.5a2.5 2.5 0 0 1-3.536 0zM2.44 6.94a1.5 1.5 0 0 0 0 2.122l4.501 4.5a1.5 1.5 0 0 0 2.122 0l4.5-4.5a1.5 1.5 0 0 0 0-2.122l-4.5-4.5a1.5 1.5 0 0 0-2.122 0z"></svg:path>`,
})
export class FluentDiamond16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

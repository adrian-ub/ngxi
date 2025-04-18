import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond32RegularIcon],svg[fluent-diamond-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.319 19.182a4.5 4.5 0 0 1 0-6.364l9.5-9.5a4.5 4.5 0 0 1 6.364 0l9.5 9.5a4.5 4.5 0 0 1 0 6.364l-9.5 9.5a4.5 4.5 0 0 1-6.364 0zm1.414-4.95a2.5 2.5 0 0 0 0 3.535l9.5 9.5a2.5 2.5 0 0 0 3.535 0l9.5-9.5a2.5 2.5 0 0 0 0-3.535l-9.5-9.5a2.5 2.5 0 0 0-3.535 0z"></svg:path>`,
})
export class FluentDiamond32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

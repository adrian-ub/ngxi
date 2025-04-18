import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextAlignCenterRotate9024FilledIcon],svg[fluent-text-align-center-rotate-90-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M6 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m7-3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z"></svg:path>`,
})
export class FluentTextAlignCenterRotate9024FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

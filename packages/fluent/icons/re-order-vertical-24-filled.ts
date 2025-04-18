import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderVertical24FilledIcon],svg[fluent-re-order-vertical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21V3a1 1 0 0 1 1.993-.117L15 3v18a1 1 0 0 1-1.993.117zm-4 0V3a1 1 0 0 1 1.993-.117L11 3v18a1 1 0 0 1-1.993.117z"></svg:path>`,
})
export class FluentReOrderVertical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

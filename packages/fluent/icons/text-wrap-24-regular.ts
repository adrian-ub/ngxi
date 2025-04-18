import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextWrap24RegularIcon],svg[fluent-text-wrap-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5H19a2.5 2.5 0 0 1 0 5h-4.44l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H19a4 4 0 0 0 0-8zM2 18.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentTextWrap24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

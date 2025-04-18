import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHanging24RegularIcon],svg[fluent-text-hanging-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm-7 13a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm.75-5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 .75-.75m5.22.72a.75.75 0 1 1 1.06 1.06l-1.47 1.47l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z"></svg:path>`,
})
export class FluentTextHanging24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

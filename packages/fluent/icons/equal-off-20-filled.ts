import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualOff20FilledIcon],svg[fluent-equal-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708L5.793 6.5H3.75a.75.75 0 0 0 0 1.5h3.543l3.5 3.5H3.75a.75.75 0 0 0 0 1.5h8.543l4.853 4.854a.5.5 0 0 0 .708-.708zM13.62 11.5l1.5 1.5h1.129a.75.75 0 0 0 0-1.5zm-5-5l1.5 1.5h6.129a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentEqualOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOpen16RegularIcon],svg[fluent-open-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V9.27a.5.5 0 0 1 1 0v2.23a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h2.23a.5.5 0 0 1 0 1zm4.27-.5a.5.5 0 0 1 .5-.5h4.23a.5.5 0 0 1 .5.5v4.23a.5.5 0 0 1-1 0V3.708L9.623 7.084a.5.5 0 1 1-.707-.707L12.293 3H9.269a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentOpen16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

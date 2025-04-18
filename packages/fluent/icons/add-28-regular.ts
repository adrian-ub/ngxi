import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAdd28RegularIcon],svg[fluent-add-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.25a.75.75 0 0 1 .75.75v9.25H24a.75.75 0 0 1 0 1.5h-9.25V24a.75.75 0 0 1-1.5 0v-9.25H4a.75.75 0 0 1 0-1.5h9.25V4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentAdd28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

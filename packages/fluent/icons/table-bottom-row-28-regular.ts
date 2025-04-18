import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableBottomRow28RegularIcon],svg[fluent-table-bottom-row-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 21.25V18.5h5v5H6.75a2.25 2.25 0 0 1-2.25-2.25M11 23.5v-5h6v5zM4.5 17V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25V17zm14 6.5v-5h5v2.75a2.25 2.25 0 0 1-2.25 2.25z"></svg:path>`,
})
export class FluentTableBottomRow28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

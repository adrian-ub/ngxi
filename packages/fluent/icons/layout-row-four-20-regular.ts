import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowFour20RegularIcon],svg[fluent-layout-row-four-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm-3-2a2 2 0 0 1 2 2H4a2 2 0 0 1 2-2zM4 10.5h12V13H4zm0-1V7h12v2.5zM6 16a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2z"></svg:path>`,
})
export class FluentLayoutRowFour20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

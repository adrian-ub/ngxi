import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentIncrease20RegularIcon],svg[fluent-text-indent-increase-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM2.854 7.732a.5.5 0 1 0-.708.707L3.207 9.5l-1.06 1.06a.5.5 0 1 0 .707.708l1.414-1.414a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentTextIndentIncrease20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

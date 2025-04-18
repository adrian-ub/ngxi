import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFontDecrease24RegularIcon],svg[fluent-font-decrease-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.255 2.195a.75.75 0 0 0-1.01 1.11l2.75 2.5a.75.75 0 0 0 1.01 0l2.75-2.5a.75.75 0 1 0-1.01-1.11L18.5 4.236zM12 4a.75.75 0 0 1 .697.474l5.75 14.5a.75.75 0 0 1-1.394.552L15.258 15H8.742l-1.795 4.526a.75.75 0 1 1-1.394-.553l5.75-14.5A.75.75 0 0 1 12 4m0 2.785L9.337 13.5h5.326z"></svg:path>`,
})
export class FluentFontDecrease24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

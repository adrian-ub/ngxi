import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignRight24RegularIcon],svg[fluent-align-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zM15.75 4A2.25 2.25 0 0 1 18 6.25v2.5A2.25 2.25 0 0 1 15.75 11H5.25A2.25 2.25 0 0 1 3 8.75v-2.5A2.25 2.25 0 0 1 5.25 4zm.75 2.25a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75zM15.75 13A2.25 2.25 0 0 1 18 15.25v2.5A2.25 2.25 0 0 1 15.75 20h-7a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 8.75 13zm.75 2.25a.75.75 0 0 0-.75-.75h-7a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class FluentAlignRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignLeft48RegularIcon],svg[fluent-align-left-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5.25a1.25 1.25 0 1 1 2.5 0v37.5a1.25 1.25 0 1 1-2.5 0zM15.75 26a4.25 4.25 0 0 0-4.25 4.25v5.5A4.25 4.25 0 0 0 15.75 40h15A4.25 4.25 0 0 0 35 35.75v-5.5A4.25 4.25 0 0 0 30.75 26zM14 30.25c0-.966.784-1.75 1.75-1.75h15c.966 0 1.75.784 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75h-15A1.75 1.75 0 0 1 14 35.75zm-2.5-18v5.5A4.25 4.25 0 0 0 15.75 22H38a4.25 4.25 0 0 0 4.25-4.25v-5.5A4.25 4.25 0 0 0 38 8H15.75a4.25 4.25 0 0 0-4.25 4.25m2.5 5.5v-5.5c0-.966.784-1.75 1.75-1.75H38c.967 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 38 19.5H15.75A1.75 1.75 0 0 1 14 17.75"></svg:path>`,
})
export class FluentAlignLeft48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

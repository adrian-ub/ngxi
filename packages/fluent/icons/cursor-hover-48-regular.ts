import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCursorHover48RegularIcon],svg[fluent-cursor-hover-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.75A4.75 4.75 0 0 1 8.75 8h30.5A4.75 4.75 0 0 1 44 12.75v18.5a4.75 4.75 0 0 1-4.099 4.706a3.24 3.24 0 0 0-.853-1.504l-.952-.952h1.154a2.25 2.25 0 0 0 2.25-2.25v-18.5a2.25 2.25 0 0 0-2.25-2.25H8.75a2.25 2.25 0 0 0-2.25 2.25v18.5a2.25 2.25 0 0 0 2.25 2.25H18V36H8.75A4.75 4.75 0 0 1 4 31.25zm18.134 7.616A1.25 1.25 0 0 0 20 21.25v21.5a1.25 1.25 0 0 0 2.285.7l4.961-7.333a.75.75 0 0 1 .808-.306l8.386 2.15a1.25 1.25 0 0 0 1.194-2.095zm.366 18.305V24.268l10.137 10.137l-3.962-1.016a3.25 3.25 0 0 0-3.5 1.327z"></svg:path>`,
})
export class FluentCursorHover48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

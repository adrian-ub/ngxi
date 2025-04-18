import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretDownLeft24RegularIcon],svg[fluent-caret-down-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M16.5 7.811l-8.69 8.69h8.44a.25.25 0 0 0 .25-.25V7.81zm-.634-1.487c.788-.788 2.134-.23 2.134.884v9.042A1.75 1.75 0 0 1 16.25 18H7.207c-1.114 0-1.671-1.346-.884-2.133l9.543-9.543z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentCaretDownLeft24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
